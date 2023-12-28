// Pie/Donut Data
// function getPieData() {
//   return [
//     {
//       label: "One",
//       value: 29.765957771107,
//     },
//     {
//       label: "Two",
//       value: 0,
//     },
//     {
//       label: "Three",
//       value: 32.807804682612,
//     },
//     {
//       label: "Four",
//       value: 196.45946739256,
//     },
//     {
//       label: "Five",
//       value: 0.19434030906893,
//     },
//     {
//       label: "Six",
//       value: 98.079782601442,
//     },
//     {
//       label: "Seven",
//       value: 13.925743130903,
//     },
//     {
//       label: "Eight",
//       value: 5.1387322875705,
//     },
//   ];
// }

// function getBarData() {
//   return [
//     {
//       key: "Cumulative Return",
//       values: [
//         {
//           label: "A Label",
//           value: -29.765957771107,
//         },
//         {
//           label: "B Label",
//           value: 0,
//         },
//         {
//           label: "C Label",
//           value: 32.807804682612,
//         },
//         {
//           label: "D Label",
//           value: 196.45946739256,
//         },
//         {
//           label: "E Label",
//           value: 0.19434030906893,
//         },
//         {
//           label: "F Label",
//           value: -98.079782601442,
//         },
//         {
//           label: "G Label",
//           value: -13.925743130903,
//         },
//         {
//           label: "H Label",
//           value: -5.1387322875705,
//         },
//       ],
//     },
//   ];
// }

function multiBarHorizontalData() {
  return [
    {
      key: "Cumulative Return",
      values: [
        {
          label: "Students",
          value: -29.765957771107,
        },
        {
          label: "B Label",
          value: 0,
        },
        {
          label: "C Label",
          value: 32.807804682612,
        },
        {
          label: "D Label",
          value: 196.45946739256,
        },
        {
          label: "E Label",
          value: 0.19434030906893,
        },
        {
          label: "F Label",
          value: -98.079782601442,
        },
        {
          label: "G Label",
          value: -13.925743130903,
        },
        {
          label: "H Label",
          value: -5.1387322875705,
        },
      ],
    },
  ];
}

/**************************************
 * Simple test data generator
 */
// function sinAndCos() {
//   var sin = [],
//     sin2 = [],
//     cos = [];

//   //Data is represented as an array of {x,y} pairs.
//   for (var i = 0; i < 100; i++) {
//     sin.push({ x: i, y: Math.sin(i / 10) });
//     sin2.push({ x: i, y: Math.sin(i / 10) * 0.25 + 0.5 });
//     cos.push({ x: i, y: 0.5 * Math.cos(i / 10) });
//   }

//   //Line chart data should be sent as an array of series objects.
//   return [
//     {
//       values: sin, //values - represents the array of {x,y} data points
//       key: "Sine Wave", //key  - the name of the series.
//       color: "#ff7f0e", //color - optional: choose your own line color.
//     },
//     {
//       values: cos,
//       key: "Cosine Wave",
//       color: "#2ca02c",
//     },
//     {
//       values: sin2,
//       key: "Another sine wave",
//       color: "#7777ff",
//       area: true, //area - set to true if you want this line to turn into a filled area chart.
//     },
//   ];
// }

document.addEventListener("DOMContentLoaded", function () {
  function drawGraph(data) {
    console.log("data", data);

    // nv.addGraph(function () {
    //   var chart = nv.models
    //     .lineChart()
    //     .margin({ left: 100 }) //Adjust chart margins to give the x-axis some breathing room.
    //     .useInteractiveGuideline(true) //We want nice looking tooltips and a guideline!
    //     // .transitionDuration(350) //how fast do you want the lines to transition?
    //     .showLegend(true) //Show the legend, allowing users to turn on/off line series.
    //     .showYAxis(true) //Show the y-axis
    //     .showXAxis(true); //Show the x-axis
    //   chart.xAxis //Chart x-axis settings
    //     .axisLabel("Time (ms)")
    //     .tickFormat(d3.format(",r"));

    //   chart.yAxis //Chart y-axis settings
    //     .axisLabel("Voltage (v)")
    //     .tickFormat(d3.format(".02f"));

    //   /* Done setting the chart up? Time to render it!*/
    //   var myData = sinAndCos(); //You need data...

    //   d3.select("#graph svg") //Select the <svg> element you want to render the chart in.
    //     .datum(myData) //Populate the <svg> element with chart data...
    //     .call(chart); //Finally, render the chart!

    //   //Update the chart when window resizes.
    //   nv.utils.windowResize(function () {
    //     chart.update();
    //   });
    //   return chart;
    // });

    nv.addGraph(function () {
      var chart = nv.models
        .multiBarHorizontalChart()
        .x(function (d) {
          return d.label;
        })
        .y(function (d) {
          return d.value;
        })
        .margin({ top: 30, right: 20, bottom: 50, left: 100 })
        .showValues(true)
        .showControls(true);
      d3.select("#graph svg").datum(data).call(chart);
      nv.utils.windowResize(chart.update);
      return chart;
    });

    // Regular pie chart example
    // nv.addGraph(function () {
    //   var chart = nv.models
    //     .pieChart()
    //     .x(function (d) {
    //       return d.label;
    //     })
    //     .y(function (d) {
    //       return d.value;
    //     })
    //     .showLabels(true);

    //   d3.select("#graph svg")
    //     .datum(data)
    //     .transition()
    //     .duration(350)
    //     .call(chart);

    //   nv.utils.windowResize(chart.update);

    //   return chart;
    // });

    //Donut chart example
    // nv.addGraph(function () {
    //   var chart = nv.models
    //     .pieChart()
    //     .x(function (d) {
    //       return d.label;
    //     })
    //     .y(function (d) {
    //       return d.value;
    //     })
    //     .showLabels(true) //Display pie labels
    //     .labelThreshold(0.05) //Configure the minimum slice size for labels to show up
    //     .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
    //     .donut(true) //Turn on Donut mode. Makes pie chart look tasty!
    //     .donutRatio(0.35); //Configure how big you want the donut hole size to be.

    //   d3.select("#graph svg")
    //     .datum(data)
    //     .transition()
    //     .duration(350)
    //     .call(chart);

    //     nv.utils.windowResize(chart.update);

    //   return chart;
    // });

    // Bar Chart CHECK DATA FORMAT!!
    // nv.addGraph(function () {
    //   const chart = nv.models
    //     .discreteBarChart()
    //     .options({
    //       duration: 350,
    //     })
    //     .x((d) => d.label)
    //     .y((d) => d.value)
    //     .staggerLabels(true)
    //     .showValues(true);

    //   d3.select("#graph svg").datum(data).call(chart);

    //   nv.utils.windowResize(chart.update);

    //   return chart;
    // });
  }
  // drawGraph(getPieData());
  // drawGraph(getBarData());
  drawGraph(multiBarHorizontalData());
});
