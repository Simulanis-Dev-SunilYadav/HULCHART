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