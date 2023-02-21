import React, { Component } from 'react'
import axios from "axios";
import Chart from "react-apexcharts";
import { getToken, apiUrl } from "../config"
import DonutChart from 'react-donut-chart';

export class Dashboard3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           type:"monthly",     // "daily", "weekly", "monthly", "yearly"
           grafChart:null,
           not_Achieved:null,
           _achieved:null,
           series: [
            {
              name: "PRODUCT A",
              data: [
                {
                  x: "",
                  y: 120,
                  fillColor: "#0b723b",
                },
                {
                  x: "",
                  y: 80,
                  fillColor: "#e10f0f",
                },
                {
                  x: "",
                  y: 60,
                  fillColor: "#e10f0f",
                },
                {
                  x: "",
                  y: 70,
                  fillColor: "#e10f0f",
                },
                {
                  x: "",
                  y: 100,
                  fillColor: "#e10f0f",
                },
              ],
            },
          ],
          options: {
            chart: {
              toolbar: {
                show: false,
              },
              height: 350,
              type: "bar",
              events: {
                click: function (chart, w, e) {},
              },
            },
    
            plotOptions: {
              bar: {
                columnWidth: "55%",
                distributed: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            xaxis: {
              categories: [
                ["Chhindwara"],
                ["Dapada"],
                ["Haridwar"],
                ["Pondicherry"],
                ["Sumerpur"],
              ],
              labels: {
                style: {
                  fontSize: "12px",
                },
              },
            },
          },
        }


      }
    
      componentDidMount() {
        this.getFlowChartData();  
      }

      getFlowChartData=async()=>{
        var token = await getToken();
            let current = this;
            var dataFormateType;

            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();
            const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
            var yesterday = new Date(today.getTime() - 24*60*60*1000);
            var threeYesterday = new Date(today.getTime() - 4*24*60*60*1000);
            const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
            const threeFormattedYesterdayDate = threeYesterday.getMonth() + 1 + '/' + threeYesterday.getDate() + '/' + threeYesterday.getFullYear();


            if(current.state.type == "daily"){
               dataFormateType = `${apiUrl}/nmbapi/GetOEEDashboard?startDate=${formattedYesterdayDate}&endDate=${formattedYesterdayDate}&factoryId=5&duration=${this.state.type}`
            }else if(current.state.type == "weekly"){
               const weekStartDate = new Date(new Date(new Date()).setDate(new Date().getDate() - new Date().getDay() + 0));
               let formattedWeekDate = weekStartDate.getMonth() + 1 + '/' + weekStartDate.getDate() + '/' +weekStartDate.getFullYear();
               dataFormateType = `${apiUrl}/nmbapi/GetOEEDashboard?startDate=${formattedWeekDate}&endDate=${formattedTodayDate}&duration=${this.state.type}`
            }else if(current.state.type == "monthly"){
               dataFormateType = `${apiUrl}/nmbapi/GetOEEDashboard?duration=monthly`
          }else if(current.state.type == "yearly"){
               dataFormateType = `${apiUrl}/nmbapi/GetOEEDashboard?duration=yearly`
          }

        const passHeader = {
              Authorization: token,
              Accept: "application/json",
                  "Content-Type": "application/json",
                               };


        axios.get(`${dataFormateType}` , {
                    headers: passHeader,
                }).then((response) =>{
                  // console.clear();
                  console.log("dashboard 3")
                  console.log(response)
                  console.log(response.data.factories.length == 0)
                   if(response.data.factories.length !== 0){
                    current.setState({
                          grafChart: response.data
                      },function(){
                          var Chhindwara = current.state.grafChart.factories.find(item => item.name == "Chhindwara");
                          var Dapada = current.state.grafChart.factories.find(item => item.name == "Dapada");
                          var Haridwar = current.state.grafChart.factories.find(item => item.name == "Haridwar");
                          var Pondicherry = current.state.grafChart.factories.find(item => item.name == "Pondicherry");
                          var Sumerpur = current.state.grafChart.factories.find(item => item.name == "Sumerpur");
                          var notAchieved = (Number(Chhindwara.oee)+Number(Dapada.oee)+Number(Haridwar.oee)+Number(Pondicherry.oee)+Number(Sumerpur.oee))/5;
                          current.setState({not_Achieved:notAchieved});
                          var achieved = (Number(100-notAchieved));
                          current.setState({_achieved:achieved});


                          var data = current.state.grafChart;
                          var Chhindwara = data.factories.find((item) => item.name == "Chhindwara");
                          var Dapada = data.factories.find((item) => item.name == "Dapada");
                          var Haridwar = data.factories.find((item) => item.name == "Haridwar");
                          var Pondicherry = data.factories.find((item) => item.name == "Pondicherry");
                          var Sumerpur = data.factories.find((item) => item.name == "Sumerpur");
                        
                          current.setState({
                            series: [
                              {
                                name: "OEE",
                                data: [
                                  {
                                    x: "",
                                    y: `${Chhindwara.oee}`,
                                    fillColor:
                                      `${Chhindwara.oee}` > `${Chhindwara.targetValue}`
                                        ? "#0b723b"
                                        : "#ff0000",
                                  },
                                  {
                                    x: "",
                                    y: `${Dapada.oee}`,
                                    fillColor:
                                      `${Dapada.oee}` > `${Dapada.targetValue}`
                                        ? "#0b723b"
                                        : "#ff0000",
                                  },
                                  {
                                    x: "",
                                    y: `${Haridwar.oee}`,
                                    fillColor:
                                      `${Haridwar.oee}` > `${Haridwar.targetValue}`
                                        ? "#0b723b"
                                        : "#ff0000",
                                  },
                                  {
                                    x: "",
                                    y: `${Pondicherry.oee}`,
                                    fillColor:
                                      `${Pondicherry.oee}` > `${Pondicherry.targetValue}`
                                        ? "#0b723b"
                                        : "#ff0000",
                                  },
                                  {
                                    x: "",
                                    y: `${Sumerpur.oee}`,
                                    fillColor:
                                      `${Sumerpur.oee}` > `${Sumerpur.targetValue}`
                                        ? "#0b723b"
                                        : "#ff0000",
                                  },
                                ],
                              },
                            ],
                          });

                      })
                  }else{
                    current.setState({not_Achieved:0});
                    current.setState({_achieved:0});
                    current.setState({
                        series: [
                          {
                            name: "OEE",
                            data: [
                              {
                                x: "",
                                y: 0,
                                fillColor: "#ff0000",
                              },
                              {
                                x: "",
                                y: 0,
                                fillColor: "#ff0000",
                              },
                              {
                                x: "",
                                y: 0,
                                fillColor: "#ff0000",
                              },
                              {
                                x: "",
                                y: 0,
                                fillColor: "#ff0000",
                              },
                              {
                                x: "",
                                y: 0,
                                fillColor: "#ff0000",
                              },
                            ],
                          },
                        ],
                      });
                  }
                }).catch((err)=>{
                    console.log("--err-");
                    console.log(err)
                });

      }

      changeReport=(e)=>{
        let current = this;
        current.setState({
            type:e
        },()=>{
            this.getFlowChartData(); 
        })
      }


  render() {
    var achievedData = this.state.not_Achieved;
   var notAchievedData = this.state._achieved;

    return (
        <>
 
        <section className="dashboard">

            <div className="dashheader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3>Factory Wise OEE</h3>
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab" aria-controls="pills-home" onClick={()=>this.changeReport("daily")} aria-selected="true">Daily</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#wtd" type="button" role="tab" aria-controls="pills-profile" onClick={()=>this.changeReport("weekly")} aria-selected="false">WTD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#mtd" type="button" role="tab" aria-controls="pills-contact" onClick={()=>this.changeReport("monthly")} aria-selected="false">MTD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#ytd" type="button" role="tab" aria-controls="pills-contact" onClick={()=>this.changeReport("yearly")} aria-selected="false">YTD</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            {/* <DateRangePicker /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                 <div className="row">
                     <div className="col-md-8">
                         <h3>Factory wise OEE</h3>
                     </div>
                     <div className="col-md-4">
                         {/* <select className='form-control'>
                             <option value="0">Select a factory</option>
                             <option value="0">Dapada</option>
                             <option value="0">Haridwar</option>
                             <option value="0">Pondicherry</option>
                             <option value="0">Sumerpur</option>
                         </select> */}
                     </div>
                 </div>
 
                 <div className="row mt-4">
                  
                     <div className="col-md-4">
                         <div className="card">
                             <div className='card-body doughnt'>
                                 <DonutChart
                                data={[
                                    {
                                    label: 'NMB OEE',
                                    value: achievedData,
                                },
                                {
                                    label: "Not Achieved",
                                    value: notAchievedData,
                                    isEmpty: false,
                                    }
                                ]}
                                width={300}
                                height={300}
                                legend={false}
                                colors={['#0b723b', '#a9a9a9']}
                                strokeColor='transparent'
                            />
                            <div className="activeinactive">
                                <p><span className='achieved'></span>Target Achieved</p>
                                <p><span className='notachieved'></span>Not Achieved</p>
                            </div>
                              </div>
                         </div>
                     </div>
                     <div className="col-md-8">
                         <div className="card">
                             <div className="card-body">
                                 <div id="chart">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                height={350}
                            />
                            </div>
                            <div className="activeinactive">
                            <p>
                                <span className="achieved"></span>Target Achieved
                            </p>
                            <p>
                                <span className="notachieved"></span>Not Achieved
                            </p>
                            </div>
                             </div>
                         </div>
                     </div>

                 </div>
            </div>

         </section>
     </>
    )
  }
}

export default Dashboard3