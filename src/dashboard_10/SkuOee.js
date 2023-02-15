import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class SkuOee extends Component {
            constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              data: [400, 430, 448]
            }],
            options: {
              colors:['#0b8651'],  
              chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                   show: false
                },
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                  opacity:1
                }
              },
              dataLabels: {
                enabled: false
              },
              grid:{
                show:false
              },
              xaxis: {
                categories: ['SKU_200', 'SKU_250', 'SKU_80',
                ],
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

export default SkuOee
