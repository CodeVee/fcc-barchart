const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

    d3.select("#barchart").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) 

  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  console.log(data.data[0]);
})


      