import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class T5DepotDPMU extends Component {
            constructor(props) {
          super(props);

          this.state = {
          
            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Cleaning Surplus', 'Product Appearance', 'Cleanliness', 'Appearance', 'Damage Scarches Suffling'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
          };
        }
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width="100%" height="350px" />
        </div>
      </>
    )
  }
}

export default T5DepotDPMU