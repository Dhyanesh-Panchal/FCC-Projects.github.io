const Plotdata = (data) => {
    const svgDim = {
        w: 1000,
        h: 600,
        padding: 50
    }
    const svg = d3.select('.graph').append('svg').style('width', svgDim.w).style('height', svgDim.h);

    console.log('recieved data is : ', data);

}

const getData = async (URL) => {
    const res = await fetch(URL);
    const jsonData = await res.json();
    let dataset = await jsonData;

    dataset = dataset.map((key) => {
        // console.log(key.Time.slice(0, 2), key.Time.slice(3, 5))
        let time = new Date(2000, 1, 1, 1, ...key.Time.split(':')); // passing minutes and seconds
        // console.log(time)
        return { ...key, formatedTime: time }
    })

    Plotdata(dataset);
}

// getData('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')