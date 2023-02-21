import React, { Component } from 'react'
import SkuOee from './SkuOee'
import axios from "axios";
import { getToken,apiUrl } from "../config";
import Chart from 'react-apexcharts'

export class Dashboard10 extends Component {

       constructor(props) {
          super(props);
          this.state = {
            selectOption:5,
            type:"weekly",  // "daily", "weekly", "monthly", "yearly"
            factoryName:"",
            series: [{
              data: []
            }],

            options: {
              chart: {
                type: 'bar',
                height: 380,
                toolbar:{
                  show:false
                },
              },
              legend:{
                show:false
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
              colors: [],
              dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                  colors: ['#000']
                },
                formatter: function (val, opt) {
                  return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: -200,
                dropShadow: {
                  enabled: false
                }
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              xaxis: {
                categories: [],
                colors:'#000',
              },
              yaxis: {
                labels: {
                  show: true
                }
              },
              title: {
                  // text: 'Custom DataLabels',
                  align: 'center',
                  floating: true
              },
              subtitle: {
                  // text: 'Category Names as DataLabels inside bars',
                  align: 'center',
              },
              tooltip: {
                theme: 'dark',
                x: {
                  show: true
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
          this.getFlowChartData();  
         }
  
        getFlowChartData=async()=>{
          var token = await getToken();
          var dataList = [];
          var nameList = [];
          var colorList = [];
          let current = this;
          var dataFormateType;
          const today = new Date();
          const yyyy = today.getFullYear();
          let mm = today.getMonth() + 1;
          let dd = today.getDate();
         const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
         var yesterday = new Date(today.getTime() - 24*60*60*1000);
         const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
      
  
         const weekStartDate = new Date(new Date(new Date()).setDate(new Date().getDate() - new Date().getDay() + 0));
         let formattedWeekDate = weekStartDate.getMonth() + 1 + '/' + weekStartDate.getDate() + '/' +weekStartDate.getFullYear();
         
         const passHeader = {
            Authorization: token,
            Accept: "application/json",
              "Content-Type": "application/json",
                };
  
                if(current.state.type == "daily"){
                      dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?startDate=${formattedYesterdayDate}&endDate=${formattedYesterdayDate}&factoryId=${this.state.selectOption}&duration=${this.state.type}`
                }else if(current.state.type == "weekly"){
                      dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?startDate=${formattedWeekDate}&endDate=${formattedTodayDate}&factoryId=${this.state.selectOption}&duration=${this.state.type}`
                }else if(current.state.type == "monthly"){
                      dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?factoryId=${this.state.selectOption}&duration=monthly`
              }else if(current.state.type == "yearly"){
                      dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?factoryId=${this.state.selectOption}&duration=yearly`
                }
  
                axios.get(`${dataFormateType}` , {
                  headers: passHeader,
                  }).then((response) =>{
                     console.log(" -----Dashboard 10");
                     console.log(response.data.skuWiseOEEList);
                      response.data.skuWiseOEEList.map((e)=>{
                          dataList.push(e.skuoee);
                          nameList.push(e.skuName);
                          colorList.push('#0b723b');
                      })
                      current.setState({
                          series: [{
                            data: dataList
                          }],
                          options: {
                            chart: {
                              type: 'bar',
                              height: 380,
                              toolbar:{
                                show:false
                              },
                            },
                            legend:{
                              show:false
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
                            colors: colorList,
                            dataLabels: {
                              enabled: true,
                              textAnchor: 'start',
                              style: {
                                colors: ['#000']
                              },
                              formatter: function (val, opt) {
                                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                              },
                              offsetX: -200,
                              dropShadow: {
                                enabled: false
                              }
                            },
                            stroke: {
                              width: 1,
                              colors: ['#fff']
                            },
                            xaxis: {
                              categories: nameList,
                              colors:'#000',
                            },
                            yaxis: {
                              labels: {
                                show: true
                              }
                            },
                            title: {
                                // text: 'Custom DataLabels',
                                align: 'center',
                                floating: true
                            },
                            subtitle: {
                                // text: 'Category Names as DataLabels inside bars',
                                align: 'center',
                            },
                            tooltip: {
                              theme: 'dark',
                              x: {
                                show: true
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
                      });
  
                  }).catch((err)=>{
                      console.log("--err")
                      console.log(err);
                      current.setState({
                        series: [{
                          data: []
                        }],
            
                        options: {
                          chart: {
                            type: 'bar',
                            height: 380,
                            toolbar:{
                              show:false
                            },
                          },
                          legend:{
                            show:false
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
                          colors: [],
                          dataLabels: {
                            enabled: true,
                            textAnchor: 'start',
                            style: {
                              colors: ['#000']
                            },
                            formatter: function (val, opt) {
                              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                            },
                            offsetX: -200,
                            dropShadow: {
                              enabled: false
                            }
                          },
                          stroke: {
                            width: 1,
                            colors: ['#fff']
                          },
                          xaxis: {
                            categories: [],
                            colors:'#000',
                          },
                          yaxis: {
                            labels: {
                              show: true
                            }
                          },
                          title: {
                              // text: 'Custom DataLabels',
                              align: 'center',
                              floating: true
                          },
                          subtitle: {
                              // text: 'Category Names as DataLabels inside bars',
                              align: 'center',
                          },
                          tooltip: {
                            theme: 'dark',
                            x: {
                              show: true
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
                      })
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


        selectFactory=(e)=>{
          let current = this;
          current.setState({
              selectOption: Number(e.target.value)
          })
           setTimeout(()=>{
              this.getFlowChartData()
           },250)
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
                              <div className='sfsctory'>
                                <label for="cars" >select a factory</label>
                                <select name="location" id="location" className='form-control' onChange={this.selectFactory}>
                                    <option value="3">Chhindwara</option>
                                    <option value="1">Dapada</option>
                                    <option value="4">Haridwar</option>
                                    <option value="2">Pondicherry</option>
                                    <option value="5" selected="selected">Sumerpur</option>
                                </select>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container scrolcomnt">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>SKU WISE OEE - {this.state.factoryName}</h2>
                            </div>
                            <div className="col-md-5">
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                        <h5>Factory - {this.state.factoryName}</h5>
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
