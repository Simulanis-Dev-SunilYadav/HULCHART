import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { token } from "../../config"

export class CLDByBranch extends Component {
              constructor(props) {
            super(props);
            this.state = {
                series: [{
                name: 'Day 0',
                type: 'column',
                data: [440, 505, 414, 671, 300]
                }, {
                name: '0 Loss CLD',
                type: 'line',
                data: [230, 42, 355, 27, 20]
                }],
                options: {
                colors : ['#2196f3', '#ff0000'],
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Day 0 V/S Loss CLD By Branch'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: ['Mumbai', 'Chennai', 'Lucknow', 'Delhi', 'Kolkata'],
                xaxis: {
                    type: 'City'
                },
                yaxis: [
                //     {
                //     title: {
                //     text: 'Website Blog',
                //     },
                // }, 
                {
                    opposite: true,
                    title: {
                    // text: 'Social Media'
                    }
                }
                ]
              },
            };
        }
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
        </div>
      </>
    )
  }
}

export default CLDByBranch