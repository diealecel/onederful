var   w = 1000,
      h =  800,
      circleWidth = 5;


var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F", 
      "brown": "#996633",
  }

var nodes = [

      { name: "Religion", target: [0, 3], value: 48 
      },
      { name: "Politics", target: [0,3,4], value: 40 },
      { name: "Technology", target: [6], value: 40},
      { name: "Sports", target: [7], value: 37},
      { name: "Books", target: [0,3,4,5], value: 36 },
      { name: "Education", target: [0, 1, 2], value: 52 },
      { name: "Movies", target: [0, 1, 2], value: 52 },
      { name: "Makeup", target: [0, 1, 2, 8], value: 37 },
      { name: "Television", target: [0,1,2], value: 35 },
      { name: "Music", target: [0,1,2,3,9], value: 67 },
      { name: "Entertainment", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
      { name: "Misc", target: [0,1,2,7,8 ], value: 16 },
      { name: "Travel", target: [0,1,2,7,8], value: 25 },
      { name: "Clothes", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 45 },
      { name: "College", target: [0,1,2,7,8], value: 25 },
      { name: "Memes", target: [0,1,2,12], value: 57 },
      { name: "Exercise", target: [0,9,10], value: 25 },
      { name: "Social Media", target: [0,9,10], value: 37 },
      { name: "Activism", target: [7,4,6,3], value: 25 },
];

var links = [];

for (var i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) {
            for ( var x = 0; x < nodes[i].target.length; x++ )
              links.push({
                  source: nodes[i],
                  target: nodes[nodes[i].target[x]]
              });
      };
};


var myChart = d3.select('body')
      .append("div")
        .classed("svg-container", true)

      .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1000 800")
        .classed("svg-content-responsive", true)


var force = d3.layout.force()
      .nodes(nodes)
      .links([])
      .gravity(0.1)
      .charge(-1000)
      .size([w,h]);

      var link = myChart.selectAll('line')
            .data(links).enter().append('line')
            .attr('stroke', palette.brown)
            .attr('strokewidth', '1');

      var node =  myChart.selectAll('circle')
            .data(nodes).enter()
            .append('g')
            .call(force.drag);


     node.append('circle')
            .attr('cx', function(d){return d.x; })
            .attr('cy', function(d){return d.y; })
            .attr('r', function(d,i){
                  console.log(d.value);
                  if ( i > 0 ) {
                        return circleWidth + d.value;
                  } else {
                    return circleWidth + 25;
                  }
            })
            .attr('fill', function(d,i){
                return '#B3E0FF';
                  
            })



      force.on('tick', function(e){
            node.attr('transform', function(d, i){
              return 'translate(' + d.x + ','+ d.y + ')'
            })

          link
              .attr('x1', function(d){ return d.source.x; })
              .attr('y1', function(d){ return d.source.y; })
              .attr('x2', function(d){ return d.target.x; })
              .attr('y2', function(d){ return d.target.y; })
      });


      node.append('text')
            .text(function(d){ return d.name; })
            .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('fill', function(d, i){
              console.log(d.value);
                  if ( i > 0 && d.value < 10 ) {
                        return palette.black;
                  } else if ( i > 0 && d.value >10 ) {
                        return palette.black;
                  } else {
                        return palette.black;
                  }
            })
            .attr('text-anchor', function(d, i) {
                  return 'middle';
            })
            .attr('font-size', function(d, i){
                  if (i > 0) {
                        return '.8em';
                  } else {
                        return '.9em';
                  }
            })

force.start();