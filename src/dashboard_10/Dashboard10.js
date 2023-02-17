import React, { Component } from 'react'
import SkuOee from './SkuOee'
import axios from "axios";
import { token,apiUrl } from "../config";
import Chart from 'react-apexcharts'

export class Dashboard10 extends Component {

       constructor(props) {
          super(props);
          this.state = {
            series: [{
              data: [400, 430, 448,]
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
              colors: ['#dc0000', '#0b723b', '#0b723b',
              ],
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
                categories: ['South Korea', 'Canada', 'India'],
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
