import React, { Component } from 'react'
import Chart from 'react-apexcharts'


export class UnitFactory extends Component {
            constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Chindwara',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Dapda',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Pondy HPC',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            },
            {
              name: 'Sumerpur',
              data: [5, 44, 63, 26, 45, 48, 2, 53, 21]
            }],
            options: {
              chart: {
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
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)'
                }
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return  + val + " thousands"
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
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
      </>
    )
  }
}

export default UnitFactory