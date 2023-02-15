import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { token } from "../config"

export class GapToTarget extends Component {

          constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Target Complete',
              data: [0.8, 0.95, 5 ,0 , 0
              ]
            },
            {
              name: 'Not Complete',
              data: [0, 0, 0, -5.18 , 0
              ]
            }
            ],
            options: {
              chart: {
                toolbar:false,
                type: 'bar',
                height: 440,
                stacked: true
              },
              colors: ['#008000', '#FF4560'],
              plotOptions: {
                bar: {
                  horizontal: true,
                  barHeight: '80%',
                },
              },
              dataLabels: {
                enabled: true
              },
              stroke: {
                width: 1,
                colors: ["#fff"]
              },
              
              grid: {
                xaxis: {
                  lines: {
                    show: false
                  }
                }
              },
              // yaxis: {
              //   min: -5,
              //   max: 5,
              //   title: {
              //     // text: 'Age',
              //   },
              // },
              tooltip: {
                shared: false,
                x: {
                  formatter: function (val) {
                    return val
                  }
                },
                y: {
                  formatter: function (val) {
                    return Math.abs(val) + "%"
                  }
                }
              },
              // title: {
              //   text: 'Mauritius population pyramid 2011'
              // },
              // xaxis: {
              //   categories: ['85+', '80-84', '75-79', '70-74', '65-69'
              //   ],
              //   title: {
              //     text: 'Percent'
              //   },
              //   labels: {
              //     formatter: function (val) {
              //       return Math.abs(Math.round(val)) + "%"
              //     }
              //   }
              // },
            },
          
          
          };
        }

  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
      </>
    )
  }
}

export default GapToTarget