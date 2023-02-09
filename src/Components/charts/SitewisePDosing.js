import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import axios from "axios";


export class SitewisePDosing extends Component {
        constructor(props) {
          super(props);
          this.state = {
            data:null,
            series: [{
              name: "SCLF Yearly Trend",
              data: [{
                x: 'Chhindwara',
                y: '5'
              }, {
                x: 'Dapada',
                y: '2'
              }, {
                x: 'Pondicherry',
                y: '3'
              },
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
                    { title: 'Chhindwara', cols: 1 },
                    { title: 'Dapada', cols: 1 },
                    { title: 'Pondicherry', cols: 1 },
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


        componentDidMount() {
          let current = this;

          const passHeader = {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU5NDU1MzgsIm5iZiI6MTY3NTk0NTUzOCwiZXhwIjoxNjc1OTQ5NDM4LCJhaW8iOiJBVlFBcS84VEFBQUFscVd1NjNxS2Vtc3NnS0RVdUNWTDVuK21kN0dFUkowOHBkd3VTSkNxaS9jTmlsUmxEOEVKQUlnVWs3Y2MxZVh5YWpSTXk0bXViTmJWKzAxT3VCQUp0eXdWaFlZK3hIZ2lrWDNQUDVMeTlEYz0iLCJuYW1lIjoiaXQsIGRhcGFkYSIsIm5vbmNlIjoiMTU1ZjZkOTItNzI3Mi00Njc2LWJmMTMtYjNkYjJiOGVhZmFlIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9ic2QwdXd0LVpUMU9wcjFPY1ZRSzRnSU1BQncuIiwic3ViIjoiVXRwTjVhUERyR21CQjU1MW5xUG9EM2FYbldldVRIWDVIVmd1V242LWc4RSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInV0aSI6Inlyb1duNFloUmt5cDN3LUtNeTlOQUEiLCJ2ZXIiOiIyLjAifQ.lqC4o2iMcNMDPG7RvFtGkSOW80ndxREuuAg5vTT5k3-hmXbofsBwCAbSMPyD7OoVno4n584gUg6hJvDSebZKheuPA5SMn1_li3C_6DysPuzO8FPh833s9y7gEYJPYV0MKOuXtKjVsxaPpbWvXpJU-yYoZx-8tGtMaYIbTgCeAUSt_d8hJa1RtMbRHEJ4XNPwOf1R4CKwksruImI6xiXgM1yfyDBAW3xUjz1h83Oj69g3gc1TjAY9NzyJN64km__et36WFQVecDrhWYwjgAmCdEZUJ0jC_gha2yD4OCZ7v_C7XJL5BuL4DE1w4PkegXloCBKPaW9C10A4b9VW26YcOg",
            Accept: "application/json",
              "Content-Type": "application/json",
                };
          axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetRMDosingAccuracy?startDate=2/8/2023&endDate=2/8/2023&duration=daily` , {
                headers: passHeader,
          }).then((response) =>{

              current.setState({
                data:response.data
              }, function () {
                var ChhindwaraData = current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Chhindwara");;
                var Dapada =  current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Dapada");
                var Pondicherry = current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Pondicherry");

               current.setState({
                series: [{
                  name: "Value",
                  data: [{
                    x: 'Chhindwara',
                    y: ChhindwaraData.averageValue
                  }, {
                    x: 'Dapada',
                    y: Dapada.averageValue
                  }, {
                    x: 'Pondicherry',
                    y: Pondicherry.averageValue
                  },
                ]
                }]
               })
        
              });
            }).catch((err)=>{
              console.log("--err-");
              console.log(err)
            });
          }


        
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <p className='text-center'>% Dosing Accuracy</p>
      </>
    )
  }
}

export default SitewisePDosing