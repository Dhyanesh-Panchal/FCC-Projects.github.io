const Plotdata = (data) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);


    let xMax = d3.max(data, d => d.Year);
    let xMin = d3.min(data, d => d.Year);
    let yMax = d3.max(data, d => d.Time);
    let yMin = d3.min(data, d => d.Time);
    // console.log(xMax)

    const xScale = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([svgDim.padding, svgDim.w - svgDim.padding]);

    const yScale = d3.scaleTime()
        .domain([yMin, yMax])
        .range([svgDim.h - svgDim.padding, svgDim.padding]);

    xAxis = d3.axisBottom(xScale);
    svg.append('g').attr('transform', `translate(0,${svgDim.h - svgDim.padding})`).call(xAxis).attr('id', 'x-axis');


    yAxis = d3.axisLeft(yScale);
    svg.append('g').attr('transform', `translate(${svgDim.padding},0)`).call(yAxis).attr('id', 'y-axis');

    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;

    Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')