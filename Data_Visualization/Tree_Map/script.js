let getColor = (val) => {

    console.log(val)
    switch (val) {
        case '2600':
            return 'rgb(210, 210, 210)'
        case 'Wii':
            return 'rgb(76, 146, 195)'
        case 'NES':
            return 'rgb(173, 229, 161)'
        case 'GB':
            return 'rgb(255, 201, 147)'
        case 'DS':
            return 'rgb(190, 210, 237)'
        case 'X360':
            return 'rgb(255, 153, 62)'
        case 'PS3':
            return 'rgb(86, 179, 86)'
        case 'PS2':
            return 'rgb(222, 82, 83)'
        case 'SNES':
            return 'rgb(209, 192, 221)'
        case 'GBA':
            return 'rgb(233, 146, 206)'
        case 'PS4':
            return 'rgb(169, 133, 202)'
        case '3DS':
            return 'rgb(255, 173, 171)'
        case 'N64':
            return 'rgb(208, 176, 169)'
        case 'PS':
            return 'rgb(153, 153, 153)'
        case 'XB':
            return 'rgb(249, 197, 219)'
        case 'PC':
            return 'rgb(163, 120, 111)'
        case 'PSP':
            return 'rgb(201, 202, 78)'
        case 'XOne':
            return 'rgb(226, 226, 164)'
    }
}

const Plotdata = (data) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);

    let hierarchy = d3.hierarchy(data, (node) => {
        return node.children;
    }).sum((node) => {
        return node.value
    }).sort((node1, node2) => {
        return node2.value - node1.value;
    })

    let createTreeMap = d3.treemap().size([svgDim.w, svgDim.h])
    createTreeMap(hierarchy)

    // console.log(hierarchy.leaves())

    let block = svg.selectAll('g')
        .data(hierarchy.leaves())
        .enter()
        .append('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`)

    block.append('rect')
        .attr('class', 'tile')
        .attr('fill', d => getColor(d.data.category))
        .attr('data-name', d => d.data.name)
        .attr('data-category', d => d.data.category)
        .attr('data-value', d => d.data.value)
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .on('mouseover', d => {
            let elementData = d.target.__data__
            console.log(elementData)
            let tooltip = d3.select('#tooltip')
            tooltip
                .style('top', `${d.y}px`)
                .style('left', `${d.x + 30}px`)
                .style('opacity', 1)
                .attr('data-value', d.target.dataset.value)
            tooltip.select('.Name').text(`Name: ${elementData.data.name}`)
            tooltip.select('.Category').text(`Category: ${elementData.data.category}`)
            tooltip.select('.Value').text(`Value: ${elementData.value}`)
        })
        .on('mouseout', d => {
            let tooltip = d3.select('#tooltip')
            tooltip
                .style('opacity', 0)
        })
    block.append('text')
        .text(d => d.data.name)
        .attr('x', 5)
        .attr('y', 20)
    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;
    Plotdata(dataset);
}

getData('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')