import React, { Component } from 'react'
import Doughnut1 from './Doughnut1'
import Doughnut2 from './Doughnut2'
import DonutChart from 'react-donut-chart';
import axios from "axios";
import { token,apiUrl } from "../config"

export class Dashboard9 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type:"daily",  // "daily", "weekly", "monthly", "yearly"
            graph1:null,
            topFiveLosses:[],
            label1:'',
            value1:'',
            color1:[],
            value11:'',

            label2:'',
            value2:'',
            color2:[],
            value22:'',

            label3:'',
            value3:'',
            color3:[],
            value33:'',

            label4:'',
            value4:'',
            color4:[],
            value44:'',

            label5:'',
            value5:'',
            color5:[],
            value55:'',
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
                     console.clear();
                     console.log("------------------")                     
                     console.log(response);
                     console.log(response.data.oeeLines[0].topFiveLosses);
                    //  console.log(response.data.oeeLines[0].lines);
                      let FW1 = response.data.oeeLines[0].lines.find((e)=>e.lineName == "FW1")
                      let FW2 = response.data.oeeLines[0].lines.find((e)=>e.lineName == "FW2")
                      let FW3 = response.data.oeeLines[0].lines.find((e)=>e.lineName == "FW3")
                      let FW4 = response.data.oeeLines[0].lines.find((e)=>e.lineName == "FW4")
                      
                      current.setState({
                        topFiveLosses : response.data.oeeLines[0].topFiveLosses
                      })
                      current.setState({
                       label1:`Tgt-${response.data.oeeLines[0].oeeTarget}`,
                       value1:  Number(`${response.data.oeeLines[0].oee}`),
                       value11: 100-Number(`${response.data.oeeLines[0].oee}`),
                       color1:[Number(`${response.data.oeeLines[0].oee}`) > Number(`${response.data.oeeLines[0].oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]   
                    });
                    
                // FW_1
                    current.setState({
                       label2:`Tgt-${FW1.oeeTarget}`,
                       value2:  Number(`${FW1.oee}`),
                       value22: 100-Number(`${FW1.oee}`),
                       color2:[ Number(`${FW1.oee}`) > Number(`${FW1.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]

                        });

                // FW_2
                    current.setState({
                       label3:`Tgt-${FW2.oeeTarget}`,
                       value3:  Number(`${FW2.oee}`),
                       value33: 100-Number(`${FW2.oee}`),
                       color3:[ Number(`${FW2.oee}`) > Number(`${FW2.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]
                        });

                // FW_3
                    current.setState({
                       label4:`Tgt-${FW3.oeeTarget}`,
                       value4:  Number(`${FW3.oee}`),
                       value44: 100-Number(`${FW3.oee}`),
                       color4:[ Number(`${FW3.oee}`) > Number(`${FW3.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]
                        });

                // FW_4
                    current.setState({
                            label5:`Tgt-${FW4.oeeTarget}`,
                            value5:  Number(`${FW4.oee}`),
                            value55: 100-Number(`${FW4.oee}`),
                            color5:[ Number(`${FW4.oee}`) > Number(`${FW4.oeeTarget}`) ? "#0b723b" : "#fa0505" , '#a9a9a9' ]
                             });
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
                                            {/* <Doughnut1/> */}

                                          <DonutChart
                                            data={[
                                                {
                                                    label: this.state.label1,
                                                    value: this.state.value1,
                                                },
                                                {
                                                    label: '',
                                                    value: this.state.value11,
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                            colors={this.state.color1}
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
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>FW1</p>
                                            <DonutChart
                                            data={[
                                                {
                                                    label: this.state.label2,
                                                    value: this.state.value2,
                                                },
                                                {
                                                    label: '',
                                                    value: this.state.value22,
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                            colors={this.state.color2}
                                            // colors={['#0b723b', '#a9a9a9']}
                                            strokeColor='transparent'
                                            emptyOffset={1}
                                            onMouseEnter={true}
                                            onClick={false}
                                            clickToggle={false}          
                                        />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>FW2</p>
                                            <DonutChart
                                            data={[
                                                {
                                                    label: this.state.label3,
                                                    value: this.state.value3,
                                                },
                                                {
                                                    label: '',
                                                    value: this.state.value33,
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                             // colors={['#0b723b', '#a9a9a9']}
                                            colors={this.state.color3}
                                            strokeColor='transparent'
                                            emptyOffset={1}
                                            onMouseEnter={true}
                                            onClick={false}
                                            clickToggle={false}          
                                        />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>FW3</p>
                                            <DonutChart
                                            data={[
                                                {
                                                    label: this.state.label4,
                                                    value: this.state.value4,
                                                },
                                                {
                                                    label: '',
                                                    value: this.state.value44,
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                            // colors={['#0b723b', '#a9a9a9']}
                                            colors={this.state.color4}
                                            strokeColor='transparent'
                                            emptyOffset={1}
                                            onMouseEnter={true}
                                            onClick={false}
                                            clickToggle={false}          
                                        />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>FW4</p>
                                            <DonutChart
                                            data={[
                                                {
                                                    label: this.state.label5,
                                                    value: this.state.value5,
                                                },
                                                {
                                                    label: '',
                                                    value: this.state.value55,
                                                },
                                            ]}
                                            width={250}
                                            height={250}
                                            legend={false}
                                            // colors={['#0b723b', '#a9a9a9']}
                                            colors={this.state.color5}
                                            strokeColor='transparent'
                                            emptyOffset={1}
                                            onMouseEnter={true}
                                            onClick={false}
                                            clickToggle={false}          
                                        />
                                        </div>
                                    </div>
                              
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
                                <td className='text-center'>{list.percentage}</td>
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
