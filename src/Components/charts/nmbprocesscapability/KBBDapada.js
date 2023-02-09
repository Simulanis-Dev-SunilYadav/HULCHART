import React, { Component } from 'react'
import Chart from 'react-apexcharts'


export class KBBDapada extends Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Marine Sprite',
              data: [44, 55]
            }, {
              name: 'Striking Calf',
              data: [53, 32]
            }, {
              name: 'Tank Picture',
              data: [12, 17]
            }],
            options: {
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 120,
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 0,
                colors: ['#fff']
              },
            //   title: {
            //     text: 'KPP',
            //     position: 'left',
            //   },
              xaxis: {
                categories: ['CP', 'CPK'],
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val + "K"
                  }
                }
              },
              fill: {
                opacity: 1
              
              },
              legend: {
                position: 'left',
                horizontalAlign: 'left',
                offsetX: 40,
                show:false
              }
            },
          };
        }
  render() {
    return (
      <>
        <div id="chart" className='position-relative'>
            <p className='kpffre1'>KBP</p>
            <Chart options={this.state.options} series={this.state.series} type="bar" height={150} />
        </div>
      </>
    )
  }
}

export default KBBDapada
