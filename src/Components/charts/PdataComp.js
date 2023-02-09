import React, { Component } from 'react'
import Chart from "react-apexcharts";
import axios from "axios";


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
                    '#006400', 
                    '#006400', 
                    '#006400', 
                    '#006400', 
                    '#006400', 
                    '#006400',
                    '#006400', 
                    '#006400', 
                    '#8B0000', 
                    '#006400',
                    '#006400',
                    '#006400', 
                    '#006400',
                    '#8B0000', 
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