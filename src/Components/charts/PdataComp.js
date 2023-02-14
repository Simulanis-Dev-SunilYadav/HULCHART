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
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzYwMDY5MTksIm5iZiI6MTY3NjAwNjkxOSwiZXhwIjoxNjc2MDEwODE5LCJhaW8iOiJBVFFBeS84VEFBQUE5QnEwVUdMWnB3c0NSdG82V0M5eVBUa3FaV0s5aTJlUE9HcG9XOThEUk54Mnl5alZWWUdqRGNnenlrNlIvdXhBIiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6IjRjODE2YTIxLTk3MDgtNGNkNy1hOWY0LTBhNmI4NmU2MjdmMyIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiJpeExteV9QOFdFeThQVWJodDV6LUFBIiwidmVyIjoiMi4wIn0.otI1gusOVie2HnsYjqjZvdlfP3KOaCct-2-5Mtgq8-m_Lqt8hR46ZtitdbOHHwBmSUtqpu_BxdFE9gIYERZTt-Z27yaat6WBk72XxhXeM7W9ScvauDk3XFrObpW51HjMlCfxx3dopuq4uiIoWJTy7E5zdGAq5gfu10P9qij6bmdQQqC_ACKHUsnHqZJJofN3qSCCGPX7EvYJjTk5uCTOK9s5-wpSnIBvrk_QhnKqhTKUg_hwlHWzikcmImjI59iMpAbxJLRp7FGZoFDO3-x32ACHtI3Zcu_0ZWxho4AB-Dwkr3dq8y_XgcAGXzL5cyiL9IQ7WB7Kq-5zvN1czmQT2A",
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