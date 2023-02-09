import React, { Component } from 'react'
import Chart  from 'react-apexcharts'


export class Cpk1 extends Component {
            constructor(props) {
          super(props);
          this.state = {
            series: [4, 45, 13],
            options: {
              colors: ['#e5ce2d', '#3ca55f', '#d50707'],
              chart: {
                width: 380,
                type: 'pie',
              },
                legend: {
                    position: 'bottom',
                    show:false
                },
              labels: ['Team A', 'Team B', 'Team C'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom',
                    show:false
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
            <Chart options={this.state.options} series={this.state.series} type="pie" width="100%" />
        </div>
      </>
    )
  }
}

export default Cpk1
