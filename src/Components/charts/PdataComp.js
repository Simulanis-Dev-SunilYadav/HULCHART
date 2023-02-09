import React, { Component } from 'react'
import Chart from "react-apexcharts";


export class PdataComp extends Component {
        constructor(props) {
           super(props);

          this.state = {
          productName:[],
          productValue:[],
            series: [{
              data: [
                
              ]
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
                width: 200
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
              colors: [
                    '#006400', 
                    '#8B0000', 
                    '#8B0000', 
                    '#006400', 
                    '#006400', 
                    '#006400', 
                    '#8B0000', 
                    '#006400',
                    '#006400', 
                    '#006400',
                    '#8B0000', 
                    '#006400',
                    '#006400', 
                    '#006400'
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
                categories: [
                   
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
                      textAlign:"left !important",
                      minWidth: 250
                        
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


        componentDidMount(){
          let current = this;
          var product_name=[];
          var product_value=[];
          current.setState({
            grafChart:{
              "prodComplianceDataForAllFactoryResponseDataList": [
                {
                  "proComplianceVal": "66.6338582677165354"
                }
              ],
              "factories": [
                {
                  "name": "Chhindwara",
                  "prodCompliancePercentage": "159.375000"
                },
                {
                  "name": "Dapada",
                  "prodCompliancePercentage": "67.626700"
                },
                {
                  "name": "Haridwar",
                  "prodCompliancePercentage": "42.345700"
                },
                {
                  "name": "Pondicherry",
                  "prodCompliancePercentage": "86.287600"
                },
                {
                  "name": "Sumerpur",
                  "prodCompliancePercentage": "110.989000"
                }
              ],
              "sKUs": [
                {
                  "skuName": "NIL MINERAL BAR 400G -BIS - Rs.62",
                  "prodComplianceVal": "127.777700"
                },
                {
                  "skuName": "SURF EXCEL BAR 250 GM",
                  "prodComplianceVal": "120.930200"
                },
                {
                  "skuName": "SURF EXCEL BAR 250G BIS",
                  "prodComplianceVal": "98.412600"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 100G",
                  "prodComplianceVal": "108.000000"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 100G - 140 CC",
                  "prodComplianceVal": "105.586500"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 150+50 GM",
                  "prodComplianceVal": "105.806400"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 150G",
                  "prodComplianceVal": "95.061700"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 400G",
                  "prodComplianceVal": "114.285700"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 80G",
                  "prodComplianceVal": "77.689200"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 84G 140 CC",
                  "prodComplianceVal": "25.527500"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 84G BIS",
                  "prodComplianceVal": "150.000000"
                },
                {
                  "skuName": "SURF EXCEL BAR FW 84G BIS 140 CC",
                  "prodComplianceVal": "125.806400"
                },
                {
                  "skuName": "SURF EXCEL BAR MPK 4x200G",
                  "prodComplianceVal": "165.420500"
                },
                {
                  "skuName": "SURF EXCEL BAR MPK 4x200G",
                  "prodComplianceVal": "197.297200"
                },
                {
                  "skuName": "SURF EXCEL BAR MPK 4x200G OFFER",
                  "prodComplianceVal": "25.225200"
                }
              ]
            }
          },function(){
            current.state.grafChart.sKUs.map(e=>{
                product_name.push(e.skuName);
                product_value.push(Number(e.prodComplianceVal));
            });
            current.setState({
              series:[{
                data:product_value
              }],
              options:{
                xaxis: {
                  categories: product_name
                }
              }
              });
            // current.setState({
            //     productName: product_name,
            //     productValue: product_value
            //   },()=>{

            //   })
            });
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