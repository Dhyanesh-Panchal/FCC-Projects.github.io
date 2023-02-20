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

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const dataset = await res.json();
    console.log(dataset);
    // converting dates -> Date Object
    dataset.monthlyVariance = dataset.monthlyVariance.map((ele) => {
        let newDate = new Date(ele.year, ele.month - 1)
        return {
            ...ele,
            Date: newDate
        }
    })
    // Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')