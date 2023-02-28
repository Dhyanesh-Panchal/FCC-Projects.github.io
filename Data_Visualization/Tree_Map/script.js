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


    block.append('rect')
        .attr('class', 'tile')
        .attr('fill', d => getColor(d.data.category))
        .attr('data-name', d => d.data.name)
        .attr('data-category', d => d.data.category)
        .attr('data-value', d => d.data.value)
    // svg.selectAll('rect')
    //     .data(data)
    //     .enter()
    //     .append('rect')
    //     .attr('x', 200)
    //     .attr('y', 300)
    //     .attr('width', 200)
    //     .attr('height', 300)
    //     .attr('fill', 'blue')
    //     .attr('class', 'tile')

    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;
    Plotdata(dataset);
}

getData('https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json')