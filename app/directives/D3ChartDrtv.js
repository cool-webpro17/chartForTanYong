angular.module('D3ChartDrtv', []).directive('d3Chart', function ($window, $route) {
    return{
      restrict:'EA',
      template:"<svg width='100%' height='100%'></svg>",
       link: function(scope, elem, attrs){

            var radius = 100;

            scope.width = $window.innerWidth;

            var state = 0;

            angular.element($window).bind('resize', function(){

                scope.width = $window.innerWidth;

                 // manuall $digest required as resize event
                 // is outside of angular

                if ((scope.width < 500) && (state != 1)) {
                    radius = 50;
                    $route.reload();
                    state = 1;

                    var chartData = scope[attrs.chartData];
                    var chartType = attrs.type;
                    var id =attrs.id;

                    console.log("Data", id);

                    var rawSvg=elem.find('svg');
                    var d3 = $window.d3;

                    var thickness = 10;

                    var chart = d3.select(rawSvg[0])
                        .attr('width', radius*2)
                        .attr('height', radius*2)
                        .append('g')
                        .attr('transform', `translate(${radius}, ${radius})`);

                    var arc = d3.arc()
                      .innerRadius(radius - thickness)
                      .outerRadius(radius)
                      .startAngle(0);

                    var bg = chart.append('path')
                      .datum({ endAngle: 2 * Math.PI  })
                      .attr('class', 'circle background')
                      .attr('d', arc);


                    switch (chartType) {
                        case "click":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle click-foreground')
                              .attr('d', arc);
                            break;
                        case "open":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle open-foreground')
                              .attr('d', arc);
                            break;
                        case "rpr":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle rpr-foreground')
                              .attr('d', arc);
                            break;
                    }

                    var label = chart.append('text')
                      .attr('class', 'label')
                      .attr('x', 2)
                      .attr('y', 2);


                    const tween = arc => {
                        return (path, angle) => {
                            path.attrTween('d', d => {
                              const i = d3.interpolate(d.endAngle, angle)
                              return t => {
                                d.endAngle = i(t)
                                return arc(d)
                              }
                            })
                        }
                    }
                 

                    var value = 0;
                    var textValue;
                    var valueArr = [];
                    switch (chartType) {
                        case 'click':
                            value = parseFloat(chartData.FIELD3);
                            textValue = chartData.FIELD3;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'open':
                            value = parseFloat(chartData.FIELD2);
                            textValue = chartData.FIELD2;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'rpr':
                            textValue = chartData.FIELD4;
                            value = Number(textValue.replace(/[^0-9\.-]+/g,""));

                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 15);
                            break;
                        default:
                            break;


                    }

                    label.text(textValue);


                } else if ((scope.width < 992) && (scope.width >=500) && (state != 2)) {
                    radius = 70;
                    $route.reload();

                    state = 2;

                    var chartData = scope[attrs.chartData];
                    var chartType = attrs.type;
                    var id =attrs.id;

                    console.log("Data", id);

                    var rawSvg=elem.find('svg');
                    var d3 = $window.d3;

                    var thickness = 10;

                    var chart = d3.select(rawSvg[0])
                        .attr('width', radius*2)
                        .attr('height', radius*2)
                        .append('g')
                        .attr('transform', `translate(${radius}, ${radius})`);

                    var arc = d3.arc()
                      .innerRadius(radius - thickness)
                      .outerRadius(radius)
                      .startAngle(0);

                    var bg = chart.append('path')
                      .datum({ endAngle: 2 * Math.PI  })
                      .attr('class', 'circle background')
                      .attr('d', arc);


                    switch (chartType) {
                        case "click":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle click-foreground')
                              .attr('d', arc);
                            break;
                        case "open":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle open-foreground')
                              .attr('d', arc);
                            break;
                        case "rpr":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle rpr-foreground')
                              .attr('d', arc);
                            break;
                    }

                    var label = chart.append('text')
                      .attr('class', 'label')
                      .attr('x', 2)
                      .attr('y', 2);


                    const tween = arc => {
                        return (path, angle) => {
                            path.attrTween('d', d => {
                              const i = d3.interpolate(d.endAngle, angle)
                              return t => {
                                d.endAngle = i(t)
                                return arc(d)
                              }
                            })
                        }
                    }
                 

                    var value = 0;
                    var textValue;
                    var valueArr = [];
                    switch (chartType) {
                        case 'click':
                            value = parseFloat(chartData.FIELD3);
                            textValue = chartData.FIELD3;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'open':
                            value = parseFloat(chartData.FIELD2);
                            textValue = chartData.FIELD2;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'rpr':
                            textValue = chartData.FIELD4;
                            value = Number(textValue.replace(/[^0-9\.-]+/g,""));

                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 15);
                            break;
                        default:
                            break;


                    }

                    label.text(textValue);


                    console.log("middle");
                } else if (state != 3) {
                    radius = 100;
                    $route.reload();

                    state = 3;

                    var chartData = scope[attrs.chartData];
                    var chartType = attrs.type;
                    var id =attrs.id;

                    console.log("Data", id);

                    var rawSvg=elem.find('svg');
                    var d3 = $window.d3;

                    var thickness = 10;

                    var chart = d3.select(rawSvg[0])
                        .attr('width', radius*2)
                        .attr('height', radius*2)
                        .append('g')
                        .attr('transform', `translate(${radius}, ${radius})`);

                    var arc = d3.arc()
                      .innerRadius(radius - thickness)
                      .outerRadius(radius)
                      .startAngle(0);

                    var bg = chart.append('path')
                      .datum({ endAngle: 2 * Math.PI  })
                      .attr('class', 'circle background')
                      .attr('d', arc);


                    switch (chartType) {
                        case "click":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle click-foreground')
                              .attr('d', arc);
                            break;
                        case "open":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle open-foreground')
                              .attr('d', arc);
                            break;
                        case "rpr":
                            var fg = chart.append('path')
                              .datum({ endAngle: 0 })
                              .attr('class', 'circle rpr-foreground')
                              .attr('d', arc);
                            break;
                    }

                    var label = chart.append('text')
                      .attr('class', 'label')
                      .attr('x', 2)
                      .attr('y', 2);


                    const tween = arc => {
                        return (path, angle) => {
                            path.attrTween('d', d => {
                              const i = d3.interpolate(d.endAngle, angle)
                              return t => {
                                d.endAngle = i(t)
                                return arc(d)
                              }
                            })
                        }
                    }
                 

                    var value = 0;
                    var textValue;
                    var valueArr = [];
                    switch (chartType) {
                        case 'click':
                            value = parseFloat(chartData.FIELD3);
                            textValue = chartData.FIELD3;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'open':
                            value = parseFloat(chartData.FIELD2);
                            textValue = chartData.FIELD2;
                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 100);
                            break;
                        case 'rpr':
                            textValue = chartData.FIELD4;
                            value = Number(textValue.replace(/[^0-9\.-]+/g,""));

                            fg.transition()
                              .duration(600)
                              .ease(d3['easeElastic'])
                              .call(tween(arc), (2 * Math.PI) * value / 15);
                            break;
                        default:
                            break;


                    }

                    label.text(textValue);

                }

                console.log("width", scope.width);
                console.log("radius", radius);

                scope.$digest();
            });

            if (scope.width < 500) {
                radius = 50;

                state = 1;

            } else if ((scope.width < 992) && (scope.width >=500)) {
                radius = 70;
                state = 2;

                console.log("middle");
            } else {
                radius = 100;
                state = 3;
            }



            var chartData = scope[attrs.chartData];
            var chartType = attrs.type;
            var id =attrs.id;

            console.log("Data", id);

            var rawSvg=elem.find('svg');
            var d3 = $window.d3;

            var thickness = 10;

            d3.select("#id").selectAll("svg").remove();
            var chart = d3.select(rawSvg[0])
                .attr('width', radius*2)
                .attr('height', radius*2)
                .append('g')
                .attr('transform', `translate(${radius}, ${radius})`);

            var arc = d3.arc()
              .innerRadius(radius - thickness)
              .outerRadius(radius)
              .startAngle(0);

            var bg = chart.append('path')
              .datum({ endAngle: 2 * Math.PI  })
              .attr('class', 'circle background')
              .attr('d', arc);


            switch (chartType) {
                case "click":
                    var fg = chart.append('path')
                      .datum({ endAngle: 0 })
                      .attr('class', 'circle click-foreground')
                      .attr('d', arc);
                    break;
                case "open":
                    var fg = chart.append('path')
                      .datum({ endAngle: 0 })
                      .attr('class', 'circle open-foreground')
                      .attr('d', arc);
                    break;
                case "rpr":
                    var fg = chart.append('path')
                      .datum({ endAngle: 0 })
                      .attr('class', 'circle rpr-foreground')
                      .attr('d', arc);
                    break;
            }

            var label = chart.append('text')
              .attr('class', 'label')
              .attr('x', 2)
              .attr('y', 2);


            const tween = arc => {
                return (path, angle) => {
                    path.attrTween('d', d => {
                      const i = d3.interpolate(d.endAngle, angle)
                      return t => {
                        d.endAngle = i(t)
                        return arc(d)
                      }
                    })
                }
            }
         

            var value = 0;
            var textValue;
            var valueArr = [];
            switch (chartType) {
                case 'click':
                    value = parseFloat(chartData.FIELD3);
                    textValue = chartData.FIELD3;
                    fg.transition()
                      .duration(600)
                      .ease(d3['easeElastic'])
                      .call(tween(arc), (2 * Math.PI) * value / 100);
                    break;
                case 'open':
                    value = parseFloat(chartData.FIELD2);
                    textValue = chartData.FIELD2;
                    fg.transition()
                      .duration(600)
                      .ease(d3['easeElastic'])
                      .call(tween(arc), (2 * Math.PI) * value / 100);
                    break;
                case 'rpr':
                    textValue = chartData.FIELD4;
                    value = Number(textValue.replace(/[^0-9\.-]+/g,""));

                    fg.transition()
                      .duration(600)
                      .ease(d3['easeElastic'])
                      .call(tween(arc), (2 * Math.PI) * value / 15);
                    break;
                default:
                    break;


            }

            label.text(textValue);
       }
   };
});