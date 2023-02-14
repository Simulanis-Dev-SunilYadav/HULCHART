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
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzYwMDY5MTksIm5iZiI6MTY3NjAwNjkxOSwiZXhwIjoxNjc2MDEwODE5LCJhaW8iOiJBVFFBeS84VEFBQUE5QnEwVUdMWnB3c0NSdG82V0M5eVBUa3FaV0s5aTJlUE9HcG9XOThEUk54Mnl5alZWWUdqRGNnenlrNlIvdXhBIiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6IjRjODE2YTIxLTk3MDgtNGNkNy1hOWY0LTBhNmI4NmU2MjdmMyIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiJpeExteV9QOFdFeThQVWJodDV6LUFBIiwidmVyIjoiMi4wIn0.otI1gusOVie2HnsYjqjZvdlfP3KOaCct-2-5Mtgq8-m_Lqt8hR46ZtitdbOHHwBmSUtqpu_BxdFE9gIYERZTt-Z27yaat6WBk72XxhXeM7W9ScvauDk3XFrObpW51HjMlCfxx3dopuq4uiIoWJTy7E5zdGAq5gfu10P9qij6bmdQQqC_ACKHUsnHqZJJofN3qSCCGPX7EvYJjTk5uCTOK9s5-wpSnIBvrk_QhnKqhTKUg_hwlHWzikcmImjI59iMpAbxJLRp7FGZoFDO3-x32ACHtI3Zcu_0ZWxho4AB-Dwkr3dq8y_XgcAGXzL5cyiL9IQ7WB7Kq-5zvN1czmQT2A",
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