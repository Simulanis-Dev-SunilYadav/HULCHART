import React from 'react';
import ReactApexChart from "react-apexcharts";
import { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { token } from "../config"

class LineDotted extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            name: "Page Views",
            data: [88.4, 90.7, 90.0, 85.2, 66.9, 78.7, 81.6, 80.3, 89, 89.3, 86.5, 93.5]
          }
        ],
        options: {
          chart: {
            toolbar: {
                show: false
                },
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          yaxis: {
            labels: {
            show: false
            }
          },
          dataLabels: {
            enabled: true,
            fontSize: '20px'
          },
          stroke: {
            width: [3],
            curve: 'straight',
            dashArray: [8]
          },
          title: {
            text: 'Day 0 Trend By Month',
            align: 'center'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                },
                

              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={200} width="100%" />
        </div>
      );
      }
    }

  export default LineDotted;