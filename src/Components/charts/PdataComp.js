import React, { Component } from 'react'
import Chart from "react-apexcharts";


export class PdataComp extends Component {
        constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [200, 230, 508, 270, 140, 200, 150, 600, 1200, 1380,1000,800,700,4000,3500]
        }],
        options: {
          grid:{
            show:false
          },
          chart: {
            toolbar: {
                show: false
                },
            type: 'bar',
            height: 380,
            width:400
          },
          plotOptions: {
            bar: {
              barHeight: '100%',
              distributed: true,
              horizontal: true,
              dataLabels: {
                position: 'bottom'
              },
            }
          },
          colors: ['#006400', '#8B0000', '#8B0000', '#006400', '#006400', '#006400', '#8B0000', '#006400',
            '#006400', '#006400'
          ],
          dataLabels: {
            enabled: false,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 0.5,
            colors: ['#fff']
          },
          xaxis: {
            categories: ['NL MINERAL BAR 400G-BIS-RS.62', 'SURF EXCEL BAR 250 GM', 'SURF EXCEL BAR 250G BIS', 'SURF EXCEL BAR FW 100G', 'SURF EXCEL BAR FW 100G - 140 CC', 'SURF EXCEL BAR FW 150+50 GM', 'SURF EXCEL BAR,FW 150G',
              'SURF EXCEL BAR FW 400G', 'SURF EXCEL BAR FW 80G', 'SURF EXCEL BAR FW 84G 140 CC','SURF EXCEL BAR FWG BIS','SURF EXCEL BAR FW 84G BIS 140 CC','SURF EXCEL BAR MPK 4x200G','SURF EXCEL BAR MPK 4x200G','SURF EXCEL BAR MPK 4X200G OFFER'
            ],
            labels:{
                style: {
                  color: "#939393",
                  fontWeight:"600",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  minWidth:"500"
                }
              }
          },
          yaxis: {
            tooltip: {
                y:{
                    formatter:(val)=>{
                        return `$${val}`
                    }
                }
            },
            labels: {
              show: true
            },
            labels:{
                style: {
                  color: "#939393",
                  fontWeight:"600",
                  fontSize:"13px",  
                  fontFamily: "Arial, Helvetica, sans-serif",
                  textAlign:"left !important"
                    
                }
              } 
          },
          legend:{
            show:false
          },
          tooltip: {
            y:{
                formatter:(val)=>{
                    return `$${val}`
                }
            },
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return ''
                }
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
            <Chart options={this.state.options} series={this.state.series} type="bar" height={380} width={1200} />
        </div>
        <div className="activeinactive">
            <p>
                <span className="achieved"></span>Target Achieved
            </p>
            <p>
                <span className="notachieved"></span>Not Achieved
            </p>
        </div>
      </>
    )
  }
}

export default PdataComp