import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class CLDByCustomer extends Component {
          constructor(props) {
            super(props);
            this.state = {
                series: [{
                name: 'Day 0',
                type: 'column',
                data: [440, 505, 414, 671]
                }, {
                name: '0 Loss CLD',
                type: 'line',
                data: [230, 42, 555, 27]
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
                    text: 'Day 0 CLD By Customer'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                labels: ['Out of Home', 'Kay Accounts', 'General Trade', 'Rural'],
                xaxis: {
                    type: 'CLD'
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

export default CLDByCustomer