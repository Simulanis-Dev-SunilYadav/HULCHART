import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import axios from "axios";
import { token } from "../../config"

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
          // axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetRMDosingAccuracy?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&duration=daily` , {
          axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetRMDosingAccuracy?startDate=2/14/2023&endDate=2/14/2023&duration=daily` , {
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