/**************************************************************************************************************
 * New Terms to explore: 
 *  1) TopoJSON & its features (it is extension of geoJSON)
 *  2) GeoJSON
 *  3) path in svg
 *  4) d3.geoPath()
 **************************************************************************************************************
 */


const EducationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
const CountyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

const getColor = (val) => {
    if (val < 10) {
        return 'rgb(229, 245, 224)'
    }
    else if (val < 17) {
        return 'rgb(199, 233, 192)'
    }
    else if (val < 24) {
        return 'rgb(161, 217, 155)'
    }
    else if (val < 32) {
        return 'rgb(116, 196, 118)'
    }
    else if (val < 40) {
        return 'rgb(65, 171, 93)'
    }
    else if (val < 49) {
        return 'rgb(35, 139, 69)'
    }
    else if (val < 58) {
        return 'rgb(2, 153, 62)'
    }
    else if (val < 67) {
        return 'rgb(0, 109, 44)'
    }
    else {
        return 'rgb(0, 85, 34)'
    }
}



const Plotdata = (Edata, Cdata) => {


    // geoJSON is has objects with type="feature" and here we have array of multiples feature objects
    Cdata = Cdata.features; // extracting feature from object
    console.log(Edata);
    console.log(Cdata);
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);

    let minBatch = d3.min(Edata, d => d.bachelorsOrHigher)
    let maxBatch = d3.max(Edata, d => d.bachelorsOrHigher)

    console.log(maxBatch)

    svg.selectAll('path') // path is a svg element which is used to draw paths...:)
        .data(Cdata)
        .enter()
        .append('path')
        .attr('d', d3.geoPath()) // this function will take the Cdata.geometry in it for each and will return a svg parsable string.
        .attr('class', 'county')
        .attr('data-fips', d => {
            let correspondingEducationData = Edata.find(ele => {
                return ele.fips == d.id;
            })
            return correspondingEducationData.fips
        })
        .attr('data-education', d => {
            let correspondingEducationData = Edata.find(ele => {
                return ele.fips == d.id;
            })
            return correspondingEducationData.bachelorsOrHigher
        })
        .attr('fill', d => {
            // console.log((d.id - 1001) / 2)
            // ==> Note: id in countyData and fips in educationData are mapped with each other. 
            let correspondingEducationData = Edata.find(ele => {
                return ele.fips == d.id;
            })
            return getColor(correspondingEducationData.bachelorsOrHigher)
        })
        .on('mouseover', d => {
            let elementCountyData = d.target.__data__
            let eduData = Edata.find(ele => {
                return ele.fips == elementCountyData.id;
            })
            // console.log()
            let tooltip = d3.select('#tooltip')
            tooltip
                .style('top', `${d.screenY - 100}px`)
                .style('left', `${d.screenX + 20}px`)
                .style('opacity', 1)
                .attr('data-education', eduData.bachelorsOrHigher)
            tooltip.select('.area-name').text(`${eduData.area_name}, `)
            tooltip.select('.state').text(`${eduData.state}, `)
            tooltip.select('.edu').text(`${eduData.bachelorsOrHigher}`)
        })
        .on('mouseout', d => {
            let tooltip = d3.select('#tooltip')
            tooltip
                .style('opacity', 0)
        })


}

const getData = async (EducationURL, CountyURL) => {
    let res = await fetch(EducationURL);
    let EducationData = await res.json();


    let CountyURLResponce = await fetch(CountyURL);
    let CountyData = await CountyURLResponce.json();    // Here the json file obtained is in topojson format 

    // Actual Data recieved here is in topoJSON format in which geometry of the USA map is Created using Polygons and its coordinates are provided here.

    CountyData = topojson.feature(CountyData, CountyData.objects.counties) // this is to convert topojson into geojson(which is understood by d3)


    Plotdata(EducationData, CountyData);
}

getData(EducationURL, CountyURL)