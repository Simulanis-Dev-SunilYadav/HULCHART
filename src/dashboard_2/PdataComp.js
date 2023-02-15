import React, { Component } from 'react'
import Chart from "react-apexcharts";
import axios from "axios";
import { token } from "../config"

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
                // width: 700
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
                      minWidth: "500px"
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
                      fontSize:"9px",  
                      fontFamily: "Arial, Helvetica, sans-serif",
                      textAlign:"left !important",
                      maxWidth: 500
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
          const today = new Date();
          const yyyy = today.getFullYear();
          let mm = today.getMonth() + 1;
          let dd = today.getDate();
         const formattedTodayDate = mm + '/' + dd + '/' + yyyy;

         
         
          let current = this;
          var product_name=[];
          var product_value=[];
          var product_color=[];

          const passHeader = {
            Authorization: token,
            Accept: "application/json",
              "Content-Type": "application/json",
                };
          // axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=daily&startDate=${formattedTodayDate}&endDate=${formattedTodayDate}` , {
          axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=daily&startDate=2/14/2023&endDate=2/14/2023` , {
                headers: passHeader,
          }).then((response) =>{
           
            current.setState({
              grafChart:response.data
              
            },function(){
            current.state.grafChart.sKUs.map(e=>{
                product_name.push(e.skuName);
                product_value.push(Number(e.prodComplianceVal));
                product_color.push(Number(e.prodComplianceVal)>= 95 ? '#0b723b' : '#dc0000' )
            });
            current.setState({
              series:[{
                data:product_value
              }],
              options:{
                xaxis: {
                  categories: product_name
                },
                colors: product_color
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