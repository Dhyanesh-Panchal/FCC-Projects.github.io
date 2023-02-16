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
    console.log(yMin)

    const xScale = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([svgDim.padding, svgDim.w - svgDim.padding]);

    const yScale = d3.scaleTime()
        .domain([yMin, yMax])
        .range([svgDim.h - svgDim.padding, svgDim.padding]);

    xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));// used to cinvert , seperated arguments into decimal
    svg.append('g').attr('transform', `translate(0,${svgDim.h - svgDim.padding})`).call(xAxis).attr('id', 'x-axis');

    let timeFormat = d3.timeFormat("%M:%S");
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
        .attr('cy', d => svgDim.h - yScale(d.formatedTime))
        .attr('r', 5)
        .attr('data-xvalue', d => d.Year)
        .attr('data-yvalue', d => d.formatedTime)

    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;

    dataset = dataset.map((key) => {
        // console.log(key.Time.slice(0, 2), key.Time.slice(3, 5))
        let time = new Date(0, 0, 0, 0, 0, 0, key.Seconds * 1000); // passing mili-seconds
        // console.log(time)
        return { ...key, formatedTime: time }
    })

    Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')