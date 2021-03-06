var dataFromYou = [
    {
        "name": "Talks",
        "children": [
            {
                "name": "talk_1",
                "size": 722,
                "url": "www.example_1.com"
            },
            {
                "name": "talk_2",
                "size": 722,
                "url": "www.example_2.com"
            },
            {
                "name": "talk_3",
                "size": 722,
                "url": "www.example_3.com"
            }
        ]
    }
];

var data = dataFromYou[0].children;

var width = 800,
    height = 250,
    radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
    return d.size;
});



var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
        return color(d.data.name);
    });

    g.append("text")
        .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function (d) {
        return d.data.name + " (" + d.data.size + ")";
    });
    