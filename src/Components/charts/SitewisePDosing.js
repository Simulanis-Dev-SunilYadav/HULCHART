import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class SitewisePDosing extends Component {
        constructor(props) {
          super(props);
          this.state = {
          
            series: [{
              name: "SCLF Yearly Trend",
              data: [{
                x: '2020',
                y: '5'
              }, {
                x: '2021',
                y: '2'
              }, {
                x: '2022',
                y: '3'
              },
            ]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 380
              },
              xaxis: {
                type: 'category',
                labels: {
                  formatter: function(val) {
                    // return "Q" + dayjs(val).quarter()
                  }
                },
                group: {
                  style: {
                    fontSize: '10px',
                    fontWeight: 700
                  },
                  groups: [
                    { title: '2020', cols: 1 },
                    { title: '2021', cols: 1 },
                    { title: '2022', cols: 1 },
                  ]
                }
              },
            //   title: {
            //       text: 'Grouped Labels on the X-axis',
            //   },
            //   tooltip: {
            //     x: {
            //       formatter: function(val) {
            //         // return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
            //       }  
            //     }
            //   },
            },
          
          
          };
        }
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <p className='text-center'>% Dosing Accuracy</p>
      </>
    )
  }
}

export default SitewisePDosing