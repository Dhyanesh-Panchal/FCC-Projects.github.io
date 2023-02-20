const getColor = (val) => {
    if (val < -5.5) {
        return 'rgb(69, 117, 180)'
    }
    else if (val < -4) {
        return 'rgb(116, 173, 209)'
    }
    else if (val < -2.5) {
        return 'rgb(171, 217, 233)'
    }
    else if (val < -1) {
        return 'rgb(224, 243, 248)'
    }
    else if (val < 1) {
        return 'rgb(255, 255, 191)'
    }
    else if (val < 2) {
        return 'rgb(254, 224, 144)'
    }
    else if (val < 3) {
        return 'rgb(253, 174, 97)'
    }
    else if (val < 4.5) {
        return 'rgb(244, 109, 67)'
    }
    else {
        return 'rgb(215, 48, 39)'
    }
}

const Plotdata = (data) => {
    const baseTemp = data.baseTemperature, monthlyData = data.monthlyVariance;
    console.log(monthlyData)
    const svgDim = {
        w: 1400,
        h: 600,
        padding: 70
    }
    const svg = d3.select('.graph')
        .append('svg')
        .style('width', svgDim.w)
        .style('height', svgDim.h);


    let xMax = d3.max(monthlyData, d => d.year);
    let xMin = d3.min(monthlyData, d => d.year);
    console.log(d3.max(monthlyData, d => d.variance))
    // console.log(yMax)

    const xScale = d3.scaleLinear()
        .domain([xMin, xMax])
        .range([svgDim.padding, svgDim.w - svgDim.padding]);

    const yScale = d3.scaleTime()
        .domain([new Date(2000, 0, 0, 0, 0, 0, 0), new Date(2000, 12, 0, 0, 0, 0, 0)])
        .range([svgDim.padding, svgDim.h - svgDim.padding]);

    xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')).ticks([26]);// used to cinvert , seperated arguments into decimal
    svg.append('g').attr('transform', `translate(0,${svgDim.h - svgDim.padding})`).call(xAxis).attr('id', 'x-axis');

    // let timeFormat = d3.timeFormat("%M:%S");
    yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%B'));
    svg.append('g')
        .attr('transform', `translate(${svgDim.padding},0)`)
        .call(yAxis)
        .attr('id', 'y-axis');


    let timeFormat = d3.timeFormat('%m')

    svg.selectAll('rect')
        .data(monthlyData)
        .enter()
        .append('rect')
        .attr('class', 'cell')
        .attr('fill', d => getColor(d.variance))
        .attr('data-month', d => d.month - 1)
        .attr('data-year', d => d.year)
        .attr('data-temp', d => d.variance + baseTemp)
        .attr('x', d => xScale(d.year))
        .attr('y', d => yScale(new Date(2000, d.month - 1, 0, 0, 0, 0, 0)))
        .attr('width', 10)
        .attr('height', (svgDim.h - (2 * svgDim.padding)) / 12)

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
    Plotdata(dataset);
}

getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')