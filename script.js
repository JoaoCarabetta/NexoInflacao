function prepare_plot(geo_data) {
  "use strict";
  var margin = 75,
      width = 1400 - margin,
      height = 600 - margin;

  d3.select("body")
    .append("h2")
    .text("Da hiperinflação à estagflação");

  var svg = d3.select("body")
      .append("svg")
      .attr("width", width + margin)
      .attr("height", height + margin)
      .append('g')
      .attr('class', 'plot');

};

function main(data) {
  prepare_plot()
}

d3.csv("data.csv", main);