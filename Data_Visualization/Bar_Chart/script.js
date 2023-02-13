document.addEventListener('DOMContentLoaded', () => {
    const URL = `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`;
    let gotData = fetch(URL).then(res => res.json()).then(data => data.data);

    const svgDim = {
        w: 1000,
        h: 600,
        padding: 30
    }
    let xScale, yScale, xAxis, yAxis;
    gotData.then(res => {

        let xMax = d3.max(res, d => Number(d[0].slice(0, 4)));
        let yMax = d3.max(res, (d) => d[1]);

        console.log(xMax, yMax)

        xScale = d3.scaleLinear()
            .domain([0, xMax])
            .range([svgDim.padding, svgDim.w - svgDim.padding]);
        yScale = d3.scaleLinear()
            .domain([0, yMax])
            .range([svgDim.h - svgDim.padding, svgDim.padding]);
        console.log(xScale(2015), yScale(100))
    })

    // Creatign SVG inside the graph section
    d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);

    // Creating Axis
    // let xAxis =
    //     d3.select('svg').append('g')
})