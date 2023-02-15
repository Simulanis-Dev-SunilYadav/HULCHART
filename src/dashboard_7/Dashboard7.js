import React, { Component } from 'react'
import DosingAccuracyP from './SCLFdosingaccuracy/DosingAccuracyP'
import RmTargetVactual from './SCLFdosingaccuracy/RmTargetVactual'
import GaugeChart from 'react-gauge-chart'
import axios from "axios";
import Chart from "react-apexcharts";
import { token,apiUrl } from "../config"

export class Dashboard7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          type:"yearly",  // "daily", "weekly", "monthly", "yearly"
          data:null,
          percent:null,
          series: [
            {
            name: 'Target Quality',
            data: [0,0]
            }, {
            name: 'Actual Quality',
            data: [0,0]
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
        }
      }

      componentDidMount(){
        this.getFlowChartData();  
      }



      getFlowChartData=()=>{
        var fullNumber;
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
        axios.get(`${apiUrl}/nmbapi/GetSiteWiseRMDosingAccuracy?factoryId=5&duration=${this.state.type}` , {
              headers: passHeader,
        }).then((response) =>{
            alert("response")
            console.log("====response")
            console.log(response)
            current.setState({
              data:response.data.siteWiseOverallNMBValue
            }, function () {
                var graphValue = current.state.data.toString();
                console.clear();
                let dotINdex = graphValue.indexOf(".");
                if(dotINdex >= 2){
                    let removeDot = graphValue.toString().replaceAll(".",'');
                    fullNumber = removeDot.substring(0, dotINdex-2) + "." + removeDot.substring(dotINdex-2);
                }else if(dotINdex == 1){
                   let removeDot = "0"+graphValue.toString().replaceAll(".",'');
                   fullNumber = removeDot.substring(0, dotINdex-2) + "." + removeDot.substring(dotINdex-2);
                }else if(dotINdex == 0){
                   let removeDot = "00"+graphValue.toString().replaceAll(".",'');
                   fullNumber = removeDot.substring(0, dotINdex-2) + "." + removeDot.substring(dotINdex-2);
                }
              var _percent = Number(fullNumber);
              current.setState({percent:_percent});

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

            });
    
          }).catch((err)=>{
            alert("err")
            console.log("--err-");
            console.log(err);
            // current.setState({percent:0})
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
    return (
      <>
         <section className="dashboard7">

            <div className="dashheader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3>Production Compliance</h3>
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

             <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body" style={{height:'375px'}}>
                                <h3 className='mt-2 mb-5'>Dosing Accuracy %</h3>
                                {/* <DosingAccuracyP/> */}
                                <GaugeChart 
                                    id="gauge-chart2" 
                                    colors={["red", "#f5cd19", 'green']}
                                    cornerRadius={1}   
                                    percent={this.state.percent}
                                    arcPadding={0}
                                    arcWidth={.3}
                                    arcsLength={[0.9, 0.05, 0.05]}
                                        />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <h3>RM Target Vs Actual </h3>
                                {/* <RmTargetVactual/> */}
                                <Chart 
                                options={this.state.options}
                                series={this.state.series} 
                                type="bar" 
                                height={300} 
                                />
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

export default Dashboard7
