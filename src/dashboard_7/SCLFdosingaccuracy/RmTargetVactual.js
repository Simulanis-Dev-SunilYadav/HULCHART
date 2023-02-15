import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { token } from "../../config"
import axios from "axios";


export class RmTargetVactual extends Component {
         constructor(props) {
          super(props);
          this.state = {
            series: [
              {
              name: 'Target Quality',
              data: [44, 55, 57, 56, 61]
              }, {
              name: 'Actual Quality',
              data: [76, 85, 101, 98, 87]
              }
             ],
            options: {
              colors:['#0085ca', '#d74f35'],              
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['HA20', 'Labsa', 'Social', 'Perfume', 'Press',],
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                     return val
                  }
                }
              }
            },
          };
        }


        componentDidMount() {
          let SiteCompanyName=[];
          let SiteActuallyValue=[];
          let SiteTargetValue=[];

          const today = new Date();
          const yyyy = today.getFullYear();
          let mm = today.getMonth() + 1;
          let dd = today.getDate();
          const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
          
          var yesterday = new Date(today.getTime() - 24*60*60*1000);
          const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
      
          let current = this;
          const passHeader = {
          Authorization: token,
          Accept: "application/json",
            "Content-Type": "application/json",
              };
          // axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetSiteWiseRMDosingAccuracy?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&duration=daily` , {
             axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetSiteWiseRMDosingAccuracy?startDate=2/14/2023&endDate=2/14/2023&factoryId=1&duration=daily` , {
                headers: passHeader,
          }).then((response) =>{
            console.clear();
            console.log("dashboard_7");
            console.log(response.data.siteWiseRMDosingAccuracyData.rmDosingTargetVsActual);
            // averageActualValue
            //     : 
            //     9.97
            //     averageTargetValue
            //     : 
            //     10.5
            //     rmDosingName
            //     : 
            //     "COLOR"
            response.data.siteWiseRMDosingAccuracyData.rmDosingTargetVsActual.map((e)=>{
              SiteCompanyName.push(e.rmDosingName)
              SiteActuallyValue.push(e.averageActualValue)
              SiteTargetValue.push(e.averageTargetValue)
            })

             current.setState({
              series:[
                {
                  name: 'Target Quality',
                  data: SiteTargetValue
                  }, {
                  name: 'Actual Quality',
                  data: SiteActuallyValue
                  }
             ],
             options: {
              colors:['#0085ca', '#d74f35'],              
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: SiteCompanyName,
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                     return val + "kg"
                  }
                }
              }
            },
             
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
            <Chart 
            options={this.state.options}
             series={this.state.series} 
             type="bar" 
             height={300} 
             />
        </div>
      </>
    )
  }
}

export default RmTargetVactual
