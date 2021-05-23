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
  maxX.setMonth(maxX.getMonth() + 3)

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

  const linearScale = d3.scaleLinear().domain([0, maxY]).range([0, height]);

  const mainGdps = gdps.map(item => linearScale(item));

  const svg = d3.select("#barchart")
      .append("svg")
      .attr("width", width + 100)
      .attr("height", height + 50);

  svg.selectAll("rect")
      .data(mainGdps)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(dates[i]))
      .attr("y", d => height - d)
      .attr("width", width / 250)
      .attr("height", d => d)
      .attr("fill", "lightblue")
      .attr("class", "bar")
      .attr('transform', 'translate(60, 30)')
      .attr("data-date", (d, i) => dataset[i][0])
      .attr("data-gdp", (d, i) => dataset[i][1])
      .append("title")
      .attr("id", "tooltip")
      .attr("data-date", (d, i) => dataset[i][0])
      .text((d, i) => dataset[i][0])

      const xAxis = d3.axisBottom(xScale);
      svg.append("g")
         .attr("transform", "translate(60, 430)")
         .call(xAxis);

         const yAxis = d3.axisLeft(yScale);

         svg.append("g")
            .attr("transform", "translate(60, 30)")
            .call(yAxis);
         
      

  // svg.selectAll("text")
  //     .data(dset)
  //     .enter()
  //     .append("text")
  //     .text(d => d[0])
  //     .attr("x", (d, i) => i * 3)
  //     .attr("y", d => height - (d[1]/50) -3)

})


      