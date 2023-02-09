import React, { Component } from 'react'
import Chart from "react-apexcharts";
import axios from "axios";

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

        const passHeader = {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU5NDU1MzgsIm5iZiI6MTY3NTk0NTUzOCwiZXhwIjoxNjc1OTQ5NDM4LCJhaW8iOiJBVlFBcS84VEFBQUFscVd1NjNxS2Vtc3NnS0RVdUNWTDVuK21kN0dFUkowOHBkd3VTSkNxaS9jTmlsUmxEOEVKQUlnVWs3Y2MxZVh5YWpSTXk0bXViTmJWKzAxT3VCQUp0eXdWaFlZK3hIZ2lrWDNQUDVMeTlEYz0iLCJuYW1lIjoiaXQsIGRhcGFkYSIsIm5vbmNlIjoiMTU1ZjZkOTItNzI3Mi00Njc2LWJmMTMtYjNkYjJiOGVhZmFlIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9ic2QwdXd0LVpUMU9wcjFPY1ZRSzRnSU1BQncuIiwic3ViIjoiVXRwTjVhUERyR21CQjU1MW5xUG9EM2FYbldldVRIWDVIVmd1V242LWc4RSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInV0aSI6Inlyb1duNFloUmt5cDN3LUtNeTlOQUEiLCJ2ZXIiOiIyLjAifQ.lqC4o2iMcNMDPG7RvFtGkSOW80ndxREuuAg5vTT5k3-hmXbofsBwCAbSMPyD7OoVno4n584gUg6hJvDSebZKheuPA5SMn1_li3C_6DysPuzO8FPh833s9y7gEYJPYV0MKOuXtKjVsxaPpbWvXpJU-yYoZx-8tGtMaYIbTgCeAUSt_d8hJa1RtMbRHEJ4XNPwOf1R4CKwksruImI6xiXgM1yfyDBAW3xUjz1h83Oj69g3gc1TjAY9NzyJN64km__et36WFQVecDrhWYwjgAmCdEZUJ0jC_gha2yD4OCZ7v_C7XJL5BuL4DE1w4PkegXloCBKPaW9C10A4b9VW26YcOg",
          Accept: "application/json",
            "Content-Type": "application/json",
              };
      axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=yearly&startDate=2/8/2023&endDate=2/8/2023` , {
            headers: passHeader,
      }).then((response) =>{
          current.setState({
            grafChart:response.data
            
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