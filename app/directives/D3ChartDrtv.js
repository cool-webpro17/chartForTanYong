angular.module('D3ChartDrtv', []).directive('d3Chart', function ($window) {
    return{
      restrict:'EA',
      template:"<svg width='100%' height='100%'></svg>",
       link: function(scope, elem, attrs){

            var chartData = scope[attrs.chartData];
            var chartType = attrs.type;

            var rawSvg=elem.find('svg');
            var d3 = $window.d3;

            var radius = 0;

            if ($(window).width() < 500) {
                var radius = 50;
            } else {
                var radius = 100;
            }
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
         
            function drawLineChart() {

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

           drawLineChart();
       }
   };
});