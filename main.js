const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const width = 500;
const height = 100;
  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  console.log(data.data[0]);
  const dset = data.data;
  // d3.select("#barchart").selectAll("div")
  //     .data(dset)
  //     .enter()
  //     .append("div")
  //     .attr("class", "bar")
  //     .style("height", (d) => (d[1] / 100 + "px"));

  const svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 30)
      .attr("y", (d, i) => height - 3 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 3)
      .attr("fill", "navy")
      .attr("class", "ba")
      .append("title")
      .text(d => d)

  svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 30)
      .attr("y", d => height - (d * 3 + 3))

})


      