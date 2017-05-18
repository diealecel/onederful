const SIZE_FACTOR = 5;

var nodes = [];

$.ajax({
    url: 'js/bubbles.json'
  }).done( function(data) {
    // DO STUFF WITH data
    if(nodes.length == 0) {
    for(var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        var targets = [];
        for(var j = i; j >= 0; j--) {
            targets.push(j);
        }
        nodes.push({name: data[i].category, target: targets, value: SIZE_FACTOR * parseInt(data[i].percentage)});
    }
  //});

var   w = 1000,
      h =  800,
      circleWidth = 10;


var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  }

var colors = []//d3.scale.category20();

<<<<<<< HEAD
/*var nodes = [
      { name: "Technology",target: [0], value: 40},
      { name: "Movies", target: [0], value: 40 },
      { name: "Sports", target: [0, 1], value: 65 },
      { name: "Education", target: [0, 1, 2], value: 52 },
      { name: "Religion", target: [0, 3], value: 48 },
      { name: "Politics", target: [0,3,4], value: 40 },
      { name: "Books", target: [0,3,4,5], value: 36 },
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
];*/
=======
var nodes = [
      { name: "Politics", target: [3, 6], value: 103 },
      { name: "Technology", target: [0, 4], value: 70 },
      { name: "Music", target: [1, 4], value: 72 },
      { name: "Education", target: [0, 3], value: 75 }, 
      { name: "Sport", target: [6, 7], value: 73 },
      { name: "Books", target: [0, 3], value: 71 },
      { name: "Activism", target: [3, 4], value: 77 },
      { name: "Misc.", target: [5, 2], value: 109 },
];
>>>>>>> 75dd31a9bf309b81f692a537e5069ea02e5b215a



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

<<<<<<< HEAD
=======

>>>>>>> 75dd31a9bf309b81f692a537e5069ea02e5b215a
var myChart = d3.select("body").selectAll("div.take-flight-project-insert")
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
      .charge(-2500)
      .size([w,h]);

      var link = myChart.selectAll('line')
            .data(links).enter().append('line')
            .attr('stroke', '#532C00')
            .attr('strokewidth', '1');

      var node =  myChart.selectAll('circle')
            .data(nodes).enter()
            .append('g')
            .call(force.drag);
      //console.log(node);

     node.append('circle')
            .attr('cx', function(d){return d.x; })
            .attr('cy', function(d){return d.y; })
            .attr('r', function(d,i){
                  //console.log(d.value);
                  if ( i > 0 ) {
                        return circleWidth + d.value;
                  } else {
                        return circleWidth + 35;
                  }
            })
            .attr('fill', function(d,i){
                  if ( i > 0 ) {
                        return colors(i);
                  } else {
                        return '#fff';
                  }
            })
            .attr('strokewidth', function(d,i){
                  if ( i > 0 ) {
                        return '0';
                  } else {
                        return '2';
                  }
            })
            .attr('stroke', function(d,i){
                  if ( i > 0 ) {
                        return '';
                  } else {
                        return 'black';
                  }
            });


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
              //console.log(d.value);
                  if ( i > 0 && d.value < 10 ) {
                        return palette.mediumgray;
                  } else if ( i > 0 && d.value >10 ) {
                        return palette.lightgray;
                  } else {
                        return palette.blue;
                  }
            })
            .attr('text-anchor', function(d, i) {
                  return 'middle';
            })
<<<<<<< HEAD
            .attr('font-size', function(data, i){
                console.log(data);
                  if (data.value > 100) {
                        return '2.5em';
                  } else {
                        return '2em';
                  }
=======
            .attr('font-size', function(d, i){
                  return '1.9em';
>>>>>>> 75dd31a9bf309b81f692a537e5069ea02e5b215a
            })

force.start();
}
});
