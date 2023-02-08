import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class ColumnOEE extends Component {
        constructor(props) {
          super(props);
          this.state = {
            // series: [{
            //   data: [21, 22, 10, 28, 16],
            //   color:['red', 'blue']
            // }],
            series: [
                {
                name: 'PRODUCT A',
                data: [
                        {
                    x: '',
                    y: 120,
                    fillColor: '#006400'
                    },
                        {
                        x: '',
                        y: 80,
                        fillColor: '#EB8C87'
                    },
                        {
                        x: '',
                        y: 60,
                        fillColor: '#EB8C87'
                    },
                    {
                        x: '',
                        y: 70,
                        fillColor: '#EB8C87'
                    },
                        {
                        x: '',
                        y: 100,
                        fillColor: '#006400'
                    },
                 ]
               }, 
            ],
            options: {
              chart: {
                height: 350,
                type: 'bar',
                events: {
                  click: function(chart, w, e) {
                    // console.log(chart, w, e)
                  }
                }
              },
            //   colors: colors,
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
              xaxis: {
                categories: [
                  ['Chindwara'],
                  ['Dapda'],
                  ['Haridwar'],
                  ['Pondicherry'],
                  ['Sumerpur'],
                //   ['Joe', 'Smith'],
                //   ['Jake', 'Williams'],
                //   'Amber',
                //   ['Peter', 'Brown'],
                //   ['Mary', 'Evans'],
                //   ['David', 'Wilson'],
                //   ['Lily', 'Roberts'], 
                ],
                labels: {
                  style: {
                    // colors: colors,
                    fontSize: '12px'
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

export default ColumnOEE
