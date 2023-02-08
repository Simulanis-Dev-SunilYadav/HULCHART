import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class ColumnOEE extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    fillColor: '#e10f0f'
                },
                    {
                    x: '',
                    y: 60,    
                    fillColor: '#e10f0f'
                },
                {
                    x: '',
                    y: 70,
                    fillColor: '#e10f0f'
                },
                    {
                    x: '',
                    y: 100,
                    fillColor: '#e10f0f'
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
                }
            },
            },
        //   colors: colors,
            plotOptions: {
            bar: {
                columnWidth: '55%',
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
         <div className="activeinactive">
            <p><span className='achieved'></span>Target Achieved</p>
            <p><span className='notachieved'></span>Not Achieved</p>
         </div>
      </>
    )
  }
}

export default ColumnOEE
