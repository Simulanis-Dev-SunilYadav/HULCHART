import React, { Component } from 'react'
import Chart from "react-apexcharts";
import axios from "axios";
import { token } from "../../config"
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
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
       const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
    

        let current = this;
        const passHeader = {
          Authorization: token,
          Accept: "application/json",
            "Content-Type": "application/json",
              };
          axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=daily&startDate=${formattedTodayDate}&endDate=${formattedTodayDate}` , {
                headers: passHeader,
          }).then((response) =>{
          console.log("----response")
          console.log(response)
            current.setState({
              grafChart:response.data
              
          },function(){
          var ChhindwaraValue = current.state.grafChart.factories.find(item => item.name == "Chhindwara");
          var DapadaValue = current.state.grafChart.factories.find(item => item.name == "Dapada");
          var HaridwarValue = current.state.grafChart.factories.find(item => item.name == "Haridwar");
          var PondicherryValue = current.state.grafChart.factories.find(item => item.name == "Pondicherry");
          var SumerpurValue = current.state.grafChart.factories.find(item => item.name == "Sumerpur");

          console.log("DapadaValue")
          console.log(DapadaValue)

          current.setState({
            series: [
              {
              name: '',
              data: [
                    {
                      x: '',
                      y: ChhindwaraValue.prodCompliancePercentage,
                      fillColor: ChhindwaraValue.prodCompliancePercentage >= 95 ? '#02613e' : '#fa0505'
                    },
                    {
                      x: '',
                      y: DapadaValue.prodCompliancePercentage,
                      fillColor: DapadaValue.prodCompliancePercentage >= 95 ? '#02613e' : '#fa0505'
                    },
                    {
                      x: '',
                      y: HaridwarValue.prodCompliancePercentage,
                      fillColor: HaridwarValue.prodCompliancePercentage >= 95 ? '#02613e' : '#fa0505'
                    },
                    {
                      x: '',
                      y: PondicherryValue.prodCompliancePercentage,
                      fillColor: PondicherryValue.prodCompliancePercentage >= 95 ? '#02613e' : '#fa0505'
                    },
                    {
                      x: '',
                      y: SumerpurValue.prodCompliancePercentage,
                      fillColor: SumerpurValue.prodCompliancePercentage >= 95 ? '#02613e' : '#fa0505'
                    },
               ]
             },
          ]
          });

          });
      }).catch((err)=>{
        console.log("--err-");
        console.log(err)
      })
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