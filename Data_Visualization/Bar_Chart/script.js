// document.addEventListener('DOMContentLoaded', () => {
//     const URL = `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`;
//     let gotData = fetch(URL).then(res => res.json()).then(data => data.data);

//     

//     //Scales , Axis and Plotting Data
//     let xScale, yScale, xAxis, yAxis;
//     gotData.then(res => {
//         
//         res = res.map(ele => {
//             return [Number(ele[0].slice(0, 4)) + Number(ele[0].slice(5, 7)) / 31, ele[1]]
//         })
//         // console.log(res)

//         let xMax = d3.max(res, d => d[0]);
//         

//         console.log(xMax, yMax)

//         

//         // console.log(xScale(2015), yScale(100))
//     })
// })

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
        .on('mouseover', d => {
            console.log(d)
            d3.select('.tooltip')
                .text(d[0])
                .style('top', d.y)
                .style('left', d.x)

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