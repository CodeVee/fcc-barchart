const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const width = 800;
const height = 500;
  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  const dataset = data.data;
  const scale = d3.scaleLinear();
  const output = scale(50);

  const minX = d3.min(dataset, (d) => d[1]);
  const maxX = d3.max(dataset, (d) => d[1]);

  const padding = 20;
  const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([padding, width - padding]);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([height - padding, padding]);

  const svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d[1]))
      .attr("y", d => height - xScale(d[1]))
      .attr("width", 1.5)
      .attr("height", d => xScale(d[1]))
      .attr("fill", "navy")
      .attr("class", "bar")
      .attr("data-date", d => d[0])
      .attr("data-gdp", d => d[1])
      .append("title")
      .attr("id", "tooltip")
      .attr("data-date", d => d[0])
      .text(d => d[0])

      const xAxis = d3.axisBottom(xScale);
      svg.append("g")
         .attr("transform", "translate(0, " + (height - padding) + ")")
         .call(xAxis);

         const yAxis = d3.axisLeft(yScale);

         svg.append("g")
            .attr("transform", "translate(" + (height - padding) + ", 0)")
            .call(yAxis);
         
      

  // svg.selectAll("text")
  //     .data(dset)
  //     .enter()
  //     .append("text")
  //     .text(d => d[0])
  //     .attr("x", (d, i) => i * 3)
  //     .attr("y", d => height - (d[1]/50) -3)

})


      