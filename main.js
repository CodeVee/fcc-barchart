const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  console.log(data.data[0]);
  const dset = data.data;
  d3.select("#barchart").selectAll("div")
      .data(dset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d[1] / 100 + "px")) 
})


      