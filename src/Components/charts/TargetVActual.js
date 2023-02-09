import React, { Component } from 'react'
import Chart from 'react-apexcharts'


export class TargetVActual extends Component {
         constructor(props) {
          super(props);
          this.state = {
            series: [{
              data: [400, 430, 448, 470, 540]
            }],
            options: {
              colors: ['#2e2e2e'],
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 0,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['Uttranchal', 'Chindwara', 'Pondy HPC', 'Dapda', 'Sumerpur'
                ],
              }
            },
          
          
          };
        }
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={380} />
        </div>
      </>
    )
  }
}

export default TargetVActual