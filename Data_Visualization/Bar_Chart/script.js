document.addEventListener('DOMContentLoaded', () => {
    const URL = `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`;
    let gotData = fetch(URL).then(res => res.json()).then(data => data.data);

    const svgDim = {
        w: 1000,
        h: 600,
        padding: 30
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);

    //Scales , Axis and Plotting Data 
    let xScale, yScale, xAxis, yAxis;
    gotData.then(res => {
        // converting dates -> year Number
        res = res.map(ele => {
            return [Number(ele[0].slice(0, 4)) + Number(ele[0].slice(5, 7)) / 31, ele[1]]
        })
        // console.log(res)

        let xMax = d3.max(res, d => d[0]);
        let xMin = d3.min(res, d => d[0]);
        let yMax = d3.max(res, d => d[1]);
        let yMin = d3.min(res, d => d[1]);

        console.log(xMax, yMax)

        xScale = d3.scaleLinear()
            .domain([xMin, xMax])
            .range([svgDim.padding, svgDim.w - svgDim.padding]);
        yScale = d3.scaleLinear()
            .domain([0, yMax])
            .range([svgDim.h - svgDim.padding, svgDim.padding]);
        // console.log(xScale(2015), yScale(100))


        xAxis = d3.axisBottom(xScale);
        yAxis = d3.axisLeft(yScale);


        //Plotting bars
        svg.selectAll('rect')
            .data(res)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d[0]))
            .attr('y', d => yScale(d[1]))
            .attr('width', 7)
            .attr('height', d => svgDim.h - yScale(d[1]))


    })
})