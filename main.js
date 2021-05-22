const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const width = 800;
const height = 500;
  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  const dset = data.data;
  const scale = d3.scaleLinear();
  const output = scale(50);


  const svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.selectAll("rect")
      .data(dset)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 3)
      .attr("y", d => height - d[1]/50)
      .attr("width", 1.5)
      .attr("height", d => d[1]/50)
      .attr("fill", "navy")
      .attr("class", "bar")
      .attr("data-date", d => d[0])
      .attr("data-gdp", d => d[1])
      .append("title")
      .attr("id", "tooltip")
      .attr("data-date", d => d[0])
      .text(d => d[0])

  // svg.selectAll("text")
  //     .data(dset)
  //     .enter()
  //     .append("text")
  //     .text(d => d[0])
  //     .attr("x", (d, i) => i * 3)
  //     .attr("y", d => height - (d[1]/50) -3)

})


      