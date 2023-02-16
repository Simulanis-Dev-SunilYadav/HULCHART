import React, { Component } from 'react'
import SkuOee from './SkuOee'
import axios from "axios";
import { token,apiUrl } from "../config";
import Chart from 'react-apexcharts'

export class Dashboard10 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type:"daily",  // "daily", "weekly", "monthly", "yearly"
            graph1:null,
            series: [{
                data: [400, 430, 448]
              }],
            options: {
                colors:['#bb0000'],  
                chart: {
                  type: 'bar',
                  height: 350,
                  toolbar: {
                     show: false
                  },
                },
                plotOptions: {
                  bar: {
                    borderRadius: 4,
                    horizontal: true,
                    opacity:1
                  }
                },
                dataLabels: {
                  enabled: false
                },
                grid:{
                  show:false
                },
                xaxis: {
                  categories: ['SKU_200', 'SKU_250', 'SKU_80',
                  ],
                }
              },
        }
    }


    componentDidMount(){
        this.getFlowChartData();    
       }


       getFlowChartData=async()=>{
        let current = this;
        console.clear();
        var fullNumber;
        var dataFormateType;
        var product_name=[];
        var product_value=[];
        var product_color=[];
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
       const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
       var yesterday = new Date(today.getTime() - 24*60*60*1000);
       var threeYesterday = new Date(today.getTime() - 4*24*60*60*1000);
       const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
       const threeFormattedYesterdayDate = threeYesterday.getMonth() + 1 + '/' + threeYesterday.getDate() + '/' + threeYesterday.getFullYear();
     


        const passHeader = {
            Authorization: token,
            Accept: "application/json",
              "Content-Type": "application/json",
                };

        
                if(current.state.type == "daily"){
                    dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&factoryId=5&duration=${this.state.type}`
                }else if(current.state.type == "weekly"){
                    const weekStartDate = new Date(new Date(new Date()).setDate(new Date().getDate() - new Date().getDay() + 0));
                    let formattedWeekDate = weekStartDate.getMonth() + 1 + '/' + weekStartDate.getDate() + '/' +weekStartDate.getFullYear();
                        dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?startDate=${formattedWeekDate}&endDate=${formattedTodayDate}&factoryId=5&duration=${this.state.type}`
                }else if(current.state.type == "monthly"){
                        dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?factoryId=5&duration=monthly`
                }else if(current.state.type == "yearly"){
                        dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?factoryId=5&duration=yearly`
                }

                axios.get(`${dataFormateType}` , {
                    headers: passHeader,
                    }).then((response) =>{
                        console.log("dashboard 10")
                        console.log(response.data.skuWiseOEEList)
                // var product_name=[];
                // var product_value=[];
                        response.data.skuWiseOEEList.map((e)=>{
                           product_name.push(e.skuName)
                           product_value.push(e.skuoee)
                        })

                        current.setState({
                          series: [{
                            data: product_value
                          }],
                          options: {
                            colors:['#bb0000'],  
                            chart: {
                              type: 'bar',
                              height: 350,
                              toolbar: {
                                 show: false
                              },
                            },
                            plotOptions: {
                              bar: {
                                borderRadius: 4,
                                horizontal: true,
                                opacity:1
                              }
                            },
                            dataLabels: {
                              enabled: false
                            },
                            grid:{
                              show:false
                            },
                            xaxis: {
                              categories: product_name,
                            }
                          },
                        })


                    }).catch((error) =>{
                        console.log("error")
                        console.log(error)
                    })

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
    return (
      <>
           <section className="dashboard9">
              <div className="dashheader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3>Factory Wise OEE</h3>
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab" aria-controls="pills-home" onClick={()=>this.changeReport("daily")} aria-selected="true">Daily</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#wtd" type="button" role="tab" aria-controls="pills-profile" onClick={()=>this.changeReport("weekly")} aria-selected="false">WTD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#mtd" type="button" role="tab" aria-controls="pills-contact" onClick={()=>this.changeReport("monthly")} aria-selected="false">MTD</button>
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
            <div className="container scrolcomnt">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>SKU WISE OEE - CHHINDWARA</h2>
                            </div>
                            <div className="col-md-5">
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                        <h5>Factory - Chhindwara</h5>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                {/* <SkuOee/> */}
                                <div id="chart">
                                  <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
                                </div>
                                <div className="activeinactive mt-4 mb-4"><p><span className="achieved"></span>Target Achieved</p><p><span className="notachieved"></span>Not Achieved</p></div>
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

export default Dashboard10
