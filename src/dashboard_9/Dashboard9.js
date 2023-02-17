import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';
import axios from "axios";
import { token,apiUrl } from "../config"

export class Dashboard9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption:5,
            type:"weekly",  // "daily", "weekly", "monthly", "yearly"
            graph1:null,
            topFiveLosses:[],
            chartGraph:[],
            DonutChart:[],
        }
        }


    componentDidMount(){
        this.getFlowChartData();    
       }

      getFlowChartData=async()=>{
        console.clear();

        let current = this;
        var dataFormateType;
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
       const formattedTodayDate = mm + '/' + dd + '/' + yyyy;

       const weekStartDate = new Date(new Date(new Date()).setDate(new Date().getDate() - new Date().getDay() + 0));
       let formattedWeekDate = weekStartDate.getMonth() + 1 + '/' + weekStartDate.getDate() + '/' +weekStartDate.getFullYear();
       
       const passHeader = {
          Authorization: token,
          Accept: "application/json",
            "Content-Type": "application/json",
              };

              if(current.state.type == "daily"){
                    dataFormateType = `${apiUrl}/nmbapi/GetLineOEE?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&factoryId=${this.state.selectOption}&duration=${this.state.type}`
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
                     
                    const alphaNumericSort = (arr = []) => {
                        const sorter = (a, b) => {
                           const isNumber = (v) => (+v).toString() === v;
                           const aPart = a.lineName.match(/\d+|\D+/g);
                           const bPart = b.lineName.match(/\d+|\D+/g);
                           let i = 0; let len = Math.min(aPart.length, bPart.length);
                           while (i < len && aPart[i] === bPart[i]) { i++; };
                              if (i === len) {
                                 return aPart.length - bPart.length;
                           };
                           if (isNumber(aPart[i]) && isNumber(bPart[i])) {
                              return aPart[i] - bPart[i];
                           };
                           return aPart[i].localeCompare(bPart[i]); };
                           arr.sort(sorter);
                     };
                     alphaNumericSort(response.data.oeeLines[0].lines);

                    current.setState({
                        chartGraph : response.data.oeeLines[0].lines
                      });

                    current.setState({
                        topFiveLosses : response.data.oeeLines[0].topFiveLosses
                      })
                      
                    current.setState({
                        DonutChart : response.data.oeeLines[0]
                      })

                }).catch((err)=>{
                    console.log("--err")
                    console.log(err)
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
                            <h3>Production Compliance</h3>
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab" aria-controls="pills-home" onClick={()=>this.changeReport("daily")} aria-selected="true">Daily</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#wtd" type="button" role="tab" aria-controls="pills-profile" onClick={()=>this.changeReport("weekly")} aria-selected="false">WTD</button>
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
                            <label for="cars" >select a factory:</label>
                                <select name="location" id="location" onChange={this.selectFactory}>
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

            <div className="container scrolcomnt">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>LINE WISE OEE - SUMERPUR</h2>
                            </div>
                            <div className="col-md-5">
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>

                        <h5>Factory - SUMERPUR</h5>
                        <div className="tab-content" id="pills-tabContent">
                            <br />
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="lwisesbox">
                                            <h3 className='text-center'>SUMERPUR</h3>
                                          <DonutChart
                                            data={[
                                                {
                                                    label: `Tgt-${this.state.DonutChart.oeeTarget}`,
                                                    value: Number(`${this.state.DonutChart.oee}`),
                                                },
                                                {
                                                    label: '',
                                                    value: 100-Number(`${this.state.DonutChart.oee}`),
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                            colors={[Number(`${this.state.DonutChart.oee}`) > Number(`${this.state.DonutChart.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]}
                                            // colors={['#0b723b', '#a9a9a9']}
                                            strokeColor='transparent'
                                            emptyOffset={1}
                                            onMouseEnter={true}
                                            onClick={false}
                                            clickToggle={false}          
                                        />

                                            <div className="activeinactive mt-4"><p><span className="achieved"></span>Target Achieved</p><p><span className="notachieved"></span>Not Achieved</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-9">
                                <div className="row">
                                    {this.state.chartGraph.map((list,item)=>

                                 
                                        <div className="col-md-3">
                                            <div className="donut2boxs">
                                                <p>{list.lineName}</p>
                                                <DonutChart
                                                data={[
                                                    {
                                                        label: `Tgt-${list.oeeTarget}`,
                                                        value: Number(`${list.oee}`),
                                                    },
                                                    {
                                                        label: '',
                                                        value: 100-Number(`${list.oee}`),
                                                    },
                                                ]}
                                                width={170}
                                                height={170}
                                                legend={false}
                                                colors={[ Number(`${list.oee}`) > Number(`${list.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]}
                                                strokeColor='transparent'
                                                emptyOffset={1}
                                                onMouseEnter={true}
                                                onClick={false}
                                                clickToggle={false}          
                                            />
                                            </div>
                                        </div>


                                      )}
                              
                                </div>
                            </div>
                        </div>

                        <table className='table mt-5'>
                            <thead>
                                <tr>
                                    <th>Top 5 losses</th>
                                    <th className='text-center'>Minutes</th>
                                    <th className='text-center'>(loss time/total loss time)*100</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.topFiveLosses.map((list, index) =>
                              <tr>
                                <td>{list.name}</td>
                                <td className='text-center'>{list.duration}</td>
                                <td className='text-center'>{list.percentage}%</td>
                             </tr>
                            )}
                               
                              
                            </tbody>
                        </table>
                            
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </>
    )
  }
}

export default Dashboard9
