import React, { Component } from 'react'
import Chart from 'react-apexcharts'


export class DepotDPMU extends Component {
            constructor(props) {
          super(props);
          this.state = {
          
            series: [{
              name: "SCLF Yearly Trend",
              data: [
                {
                x: '2019',
                y: '25'
              }, 
                {
                x: '2020',
                y: '16'
              }, 
              {
                x: '2021',
                y: '12'
              }, {
                x: '2022',
                y: '11'
              },
              {
                x: '2023',
                y: '10k'
              }
            ]
            }],
            options: {
              chart: {
                toolbar: {
                    show: false,
                },
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
                    { title: 'Uttranchal', cols: 1 },
                    { title: 'Chindwara', cols: 1 },
                    { title: 'PondyHPC', cols: 1 },
                    { title: 'Dapda', cols: 1 },
                    { title: 'Sumerpur', cols: 1 }
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
            <Chart options={this.state.options} series={this.state.series} type="bar" height={380} />
        </div>
      </>
    )
  }
}

export default DepotDPMU