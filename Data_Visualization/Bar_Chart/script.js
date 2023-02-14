const Plotdata = (data) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);


    let xMax = d3.max(data, d => d[0]);
    let xMin = d3.min(data, d => d[0]);
    let yMax = d3.max(data, d => d[1]);
    let yMin = d3.min(data, d => d[1]);
    // console.log(xMax)

    const xScale = d3.scaleTime()
        .domain([xMin, xMax])
        .range([svgDim.padding, svgDim.w - svgDim.padding]);

    const yScale = d3.scaleLinear()
        .domain([0, yMax])
        .range([svgDim.h - svgDim.padding, svgDim.padding]);

    xAxis = d3.axisBottom(xScale);
    svg.append('g').attr('transform', `translate(0,${svgDim.h - svgDim.padding})`).call(xAxis).attr('id', 'x-axis');


    yAxis = d3.axisLeft(yScale);
    svg.append('g').attr('transform', `translate(${svgDim.padding},0)`).call(yAxis).attr('id', 'y-axis');


    //Plotting bars
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d[0]))
        .attr('y', d => yScale(d[1]))
        .attr('width', 4)
        .attr('height', d => { console.log(d[1]); return svgDim.h - svgDim.padding - yScale(d[1]) })
        .attr('class', 'bar')
        .attr('data-date', d => d[2])
        .attr('data-gdp', d => d[1])
        .on('mouseover', (event) => {
            console.log(event.relatedTarget['data-date'])
            let currentData = event.relatedTarget.__data__;
            let tooltip = d3.select('.tooltip')
            console.log()
            tooltip
                .style('top', `${event.y - 25}px`)
                .style('left', `${event.x + 30}px`)
                .attr('data-date', currentData[2])
                .attr('id', 'tooltip')
            tooltip.select('.date').text(`${currentData[2]}`)
            tooltip.select('.GDP').text(`$ ${currentData[1]} billion`)
        }) //this is an event added when we hover it
    // console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData.data;
    // console.log(dataset)


    // converting dates -> year Number
    dataset = dataset.map((ele) => {
        let date = new Date(ele[0]);
        return [date, ele[1], ele[0]]
    })
    Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')