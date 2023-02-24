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



const Plotdata = (Edata, Cdata) => {

    // ==> Note: id in countyData and fips in educationData are mapped with each other. 

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

    svg.selectAll('path') // path is a svg element which is used to draw paths...:)
        .data(Cdata)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())


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