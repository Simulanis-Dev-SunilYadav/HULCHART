import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import axios from "axios";
import Chart from "react-apexcharts";
import { apiUrl, getToken } from "../config"


export class Dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           type:"daily",     // "daily", "weekly", "monthly", "yearly"
           grafChart:null,
           productName:[],
           productValue:[],
           series: [
            {
            name: '',
            data: [
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
                    axisBorder: { show: true },
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
                },
            
           series1: [{
                    data: [
                    ]
                  }],
           options1: {
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
        }
      }
    
      componentDidMount(){
        this.getFlowChartData();  
       }

      getFlowChartData=async ()=>{
        console.clear();
        var token = await getToken();
        console.log("__token");
        console.log(token);
        let current = this;
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
       const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();
    
        const passHeader = {
          Authorization: token,
          Accept: "application/json",
            "Content-Type": "application/json",
              };


          axios.get(`${apiUrl}/nmbapi/GetProdComplianceDataForAllFactory?duration=${this.state.type}&startDate=${formattedYesterdayDate}&endDate=${formattedYesterdayDate}` , {
                headers: passHeader,
          }).then((response) =>{
              current.setState({
                grafChart:response.data
              },function(){
                 var graphValue = current.state.grafChart.prodComplianceDataForAllFactoryResponseDataList[0].proComplianceVal;
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
                            fillColor: ChhindwaraValue.prodCompliancePercentage >= 95 ? '#0b723b' : '#fa0505'
                            },
                            {
                            x: '',
                            y: DapadaValue.prodCompliancePercentage,
                            fillColor: DapadaValue.prodCompliancePercentage >= 95 ? '#0b723b' : '#fa0505'
                            },
                            {
                            x: '',
                            y: HaridwarValue.prodCompliancePercentage,
                            fillColor: HaridwarValue.prodCompliancePercentage >= 95 ? '#0b723b' : '#fa0505'
                            },
                            {
                            x: '',
                            y: PondicherryValue.prodCompliancePercentage,
                            fillColor: PondicherryValue.prodCompliancePercentage >= 95 ? '#0b723b' : '#fa0505'
                            },
                            {
                            x: '',
                            y: SumerpurValue.prodCompliancePercentage,
                            fillColor: SumerpurValue.prodCompliancePercentage >= 95 ? '#0b723b' : '#fa0505'
                            },
                    ]
                    },
                ]
                });
            
               
        // short Object Array_______________
                response.data.sKUs.sort((a, b) => {
                  if (a.skuName < b.skuName) return -1;
                  if (a.skuName > b.skuName) return 1;
                  return 0;
                 });

                response.data.sKUs.map(e=>{
                    product_name.push(e.skuName);
                    product_value.push(Number(e.prodComplianceVal));
                    product_color.push(Number(e.prodComplianceVal)>= 95 ? '#0b723b' : '#dc0000' )
                });
                console.log("response.data")
                console.log(response.data.sKUs)
                current.setState({
                  series1:[{
                    data:product_value
                  }],
                  options1:{
                    xaxis: {
                      categories: product_name
                    },
                    colors: product_color
                  }
                  });
            
              });

          }).catch((err)=>{
                    console.log("--err-");
                    console.log(err);
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
        {/* <div className="preloader" id ="showHide">
          <div class="ui-loader loader-blk">
            <svg viewBox="22 22 44 44" class="multiColor-loader">
                <circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6" class="loader-circle loader-circle-animation"></circle>
            </svg>
          </div>
        </div> */}

        <section className="dashboard1">
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
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body gause1">
                                <h3>NMB Production Compilance</h3>
                                <GaugeChart 
                                        id="gauge-chart2"
                                        colors={['red', '#F5CD19', '#008000']}
                                        percent={this.state.percent}
                                        textColor="#000"
                                        cornerRadius={1}
                                        arcPadding={0}
                                        arcWidth={.3}
                                        arcsLength={[0.9, 0.05, 0.05]}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                width="800"
                                height="350"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                            
                            <div id="chart">
                            <Chart options={this.state.options1} series={this.state.series1} type="bar" height={380} width={1200} />
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

export default Dashboard2