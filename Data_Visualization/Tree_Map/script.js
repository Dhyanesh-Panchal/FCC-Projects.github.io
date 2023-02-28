let getColor = (val) => {

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
        .attr('fill', d => {
            console.log(d)
        })
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