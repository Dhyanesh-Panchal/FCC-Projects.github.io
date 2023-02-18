const Plotdata = (data) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);


    let xMax = d3.max(data, d => d.Year);
    let xMin = d3.min(data, d => d.Year);
    let yMax = d3.max(data, d => d.formatedTime);
    let yMin = d3.min(data, d => d.formatedTime);
    // console.log(yMin)
    // console.log(yMax)

    const xScale = d3.scaleLinear()
        .domain([xMin - 1, xMax + 1])
        .range([svgDim.padding, svgDim.w - svgDim.padding]);

    const yScale = d3.scaleTime()
        .domain([yMin, yMax])
        .range([svgDim.padding, svgDim.h - svgDim.padding]);

    xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));// used to cinvert , seperated arguments into decimal
    svg.append('g').attr('transform', `translate(0,${svgDim.h - svgDim.padding})`).call(xAxis).attr('id', 'x-axis');

    // let timeFormat = d3.timeFormat("%M:%S");
    yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));
    svg.append('g')
        .attr('transform', `translate(${svgDim.padding},0)`)
        .call(yAxis)
        .attr('id', 'y-axis');


    //Plotting circles
    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', d => xScale(d.Year))
        .attr('cy', d => yScale(d.formatedTime))
        .attr('r', 5)
        .attr('data-xvalue', d => d.Year)
        .attr('data-yvalue', d => d.formatedTime)
        .attr('fill', d => { if (d.Doping) { return 'rgb(31, 119, 180)' } else { return 'rgb(255, 127, 14)' } })

    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;

    dataset = dataset.map((key) => {
        // console.log(key.Time.slice(0, 2), key.Time.slice(3, 5))
        let time = new Date(2000, 1, 1, 1, ...key.Time.split(':')); // passing minutes and seconds
        // console.log(time)
        return { ...key, formatedTime: time }
    })

    Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')