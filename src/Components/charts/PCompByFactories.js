import React, { Component } from 'react'
import Chart from "react-apexcharts";


export class PCompByFactories extends Component {
        constructor(props) {
        super(props);
        this.state = {
          series: [
              {
              name: '',
              data: [
                    {
                      x: '',
                      y: 120,
                      fillColor: '#006400'
                    },
                    {
                      x: '',
                      y: 80,
                      fillColor: '#8B0000'
                    },
                    {
                      x: '',
                      y: 60,
                      fillColor: '#8B0000'
                    },
                    {
                      x: '',
                      y: 70,
                      fillColor: '#8B0000'
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
                toolbar: {
                    show: false
                    },
              events: {
                click: function(chart, w, e) {
                }
              }
            },
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
                ['Chhindwara'],
                ['Dapada'],
                ['Haridwar'],
                ['Pondicherry'],
                ['Sumerpur'],
              ],
              labels: {
                style: {
                  fontSize: '14px',
                  color :"#939393",
                  fontWeight: "700",
                  fontFamily: "Arial, Helvetica, sans-serif"

                }
              }
            },
            yaxis:{
                axisBorder: {
                    show: true
                  },
                  labels:{
                  style: {
                    color: "#939393",
                    fontWeight:"600",
                    fontFamily: "Arial, Helvetica, sans-serif"
                  }
                }
            },
            title: {
              text: "Production Compliance by Factories",
              style:{
                fontSize:18,
                color:"#454545",
                fontFamily: "Arial, Helvetica, sans-serif"
              }
          },
          grid:{
            show:false
          }
          }
        };
      }

      componentDidMount(){
        let current = this;
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
          var ChhindwaraValue = current.state.grafChart.factories.find(item => item.name == "Chhindwara");
          var DapadaValue = current.state.grafChart.factories.find(item => item.name == "Dapada");
          var HaridwarValue = current.state.grafChart.factories.find(item => item.name == "Haridwar");
          var PondicherryValue = current.state.grafChart.factories.find(item => item.name == "Pondicherry");
          var SumerpurValue = current.state.grafChart.factories.find(item => item.name == "Sumerpur");

          current.setState({
            series: [
              {
              name: '',
              data: [
                    {
                      x: '',
                      y: ChhindwaraValue.prodCompliancePercentage,
                      fillColor: ChhindwaraValue.prodCompliancePercentage >= 100 ? '#006400' : '#8B0000'
                    },
                    {
                      x: '',
                      y: DapadaValue.prodCompliancePercentage,
                      fillColor: DapadaValue.prodCompliancePercentage >= 100 ? '#006400' : '#8B0000'
                    },
                    {
                      x: '',
                      y: HaridwarValue.prodCompliancePercentage,
                      fillColor: HaridwarValue.prodCompliancePercentage >= 100 ? '#006400' : '#8B0000'
                    },
                    {
                      x: '',
                      y: PondicherryValue.prodCompliancePercentage,
                      fillColor: PondicherryValue.prodCompliancePercentage >= 100 ? '#006400' : '#8B0000'
                    },
                    {
                      x: '',
                      y: SumerpurValue.prodCompliancePercentage,
                      fillColor: SumerpurValue.prodCompliancePercentage >= 100 ? '#006400' : '#8B0000'
                    },
               ]
             },
          ]
          });

          });
      }


  render() {
    return (
      <>
                      <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="bar"
                      width="800"
                      height="350"
            />
      </>
    )
  }
}

export default PCompByFactories