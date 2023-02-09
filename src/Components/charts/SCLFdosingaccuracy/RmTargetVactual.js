import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class RmTargetVactual extends Component {
         constructor(props) {
          super(props);
          this.state = {
            series: [{
              name: 'Target Quality',
              data: [44, 55, 57, 56, 61]
            }, {
              name: 'Actual Quality',
              data: [76, 85, 101, 98, 87]
            }],
            options: {
              colors:['#20169d', '#e22f2f'],              
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['HA20', 'Labsa', 'Social', 'Perfume', 'Press',],
              },
            //   yaxis: {
            //     title: {
            //       text: '$ (thousands)'
            //     }
            //   },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "$ " + val + " thousands"
                  }
                }
              }
            },
          };
        }
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={300} />
        </div>
      </>
    )
  }
}

export default RmTargetVactual
