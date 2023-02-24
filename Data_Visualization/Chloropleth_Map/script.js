const EducationURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json';
const CountyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json';

const Plotdata = (Edata, Cdata) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);
    console.log(Edata)
    console.log(Cdata)

}

const getData = async (EducationURL, CountyURL) => {
    let res = await fetch(EducationURL);
    let EducationData = await res.json();


    let CountyURLResponce = await fetch(CountyURL);
    let CountyData = await CountyURLResponce.json()
    Plotdata(EducationData, CountyData);
}

getData(EducationURL, CountyURL)