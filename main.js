const endpoint = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
const width = 800;
const height = 400;
  
fetch(endpoint)
.then(response => response.json())
.then(data => {
  const dataset = data.data;
  const scale = d3.scaleLinear();
  const output = scale(50);

  const dates = dataset.map(set => new Date(set[0]));
  const minX = d3.min(dates);
  const maxX = d3.max(dates);

  const padding = 20;
  const xScale = d3.scaleTime()
  .domain([minX, maxX])
  .range([0, width]);

  const gdps = dataset.map(set => set[1]);
  const minY = d3.min(gdps);
  const maxY = d3.max(gdps);

  const yScale = d3.scaleLinear()
  .domain([0, maxY])
  .range([height, 0]);

  const svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width + 100)
      .attr("height", height + 50);

  svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", d => xScale(d[0]))
      .attr("y", d => yScale(new Date(d[1])))
      .attr("width", 1.5)
      .attr("height", d => yScale(d[1]))
      .attr("fill", "navy")
      .style("margin", "2px")
      .attr("class", "bar")
      .attr("data-date", d => d[0])
      .attr("data-gdp", d => d[1])
      .append("title")
      .attr("id", "tooltip")
      .attr("data-date", d => d[0])
      .text(d => d[0])

      const xAxis = d3.axisBottom(xScale);
      svg.append("g")
         .attr("transform", "translate(60, 400)")
         .call(xAxis);

         const yAxis = d3.axisLeft(yScale);

         svg.append("g")
            .attr("transform", "translate(60, 0)")
            .call(yAxis);
         
      

  // svg.selectAll("text")
  //     .data(dset)
  //     .enter()
  //     .append("text")
  //     .text(d => d[0])
  //     .attr("x", (d, i) => i * 3)
  //     .attr("y", d => height - (d[1]/50) -3)

})


      