import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import KBBChhindwara from './KBBChhindwara';
import axios from "axios";
import { token,apiUrl } from "../../config"

export class Dapda extends Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [{
              name: '',
              data: [10, 50]
            }, {
              name: '',
              data: [2, 32]
            }, {
              name: '',
              data: [3, 17]
            }],
            options: {
              colors: ['#a9a9a9', '#f4ca16', '#0b723b'],
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 120,
                stacked: true,
                stackType: '100%'
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 0,
                colors: ['#fff']
              },
            //   title: {
            //     text: 'KPP',
            //     position: 'left',
            //   },
              xaxis: {
                categories: ['CP', 'CPK'],
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return val 
                  }
                }
              },
              fill: {
                opacity: 1
              
              },
              legend: {
                position: 'left',
                horizontalAlign: 'left',
                offsetX: 40,
                show:false
              }
            },
          };
        }


          componentDidMount(){
            var seriesData = [];
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
                axios.get(`${apiUrl}/nmbapi/GetKPPKBP?date=${formattedTodayDate}` , {
                  headers: passHeader,
                  }).then((response) =>{
                    // console.clear();
                    
                    let pondicherryData = response.data.kBPKPPFactoryList.find(item=>item.factoryName == "Chhindwara")
                    let kbp_Cp_Data_Value = pondicherryData.factoryKPP.factoryKppCpValue;
                    let kbp_Cpk_Data_Value = pondicherryData.factoryKPP.factoryKppCpkValue;

                    let amber={
                      name:'',
                      data:[kbp_Cp_Data_Value.amber,  kbp_Cpk_Data_Value.amber]
                     };
                     let red={
                      name:'',
                      data:[kbp_Cp_Data_Value.red,  kbp_Cpk_Data_Value.red]
                     };
                     let green={
                      name:'',
                      data:[kbp_Cp_Data_Value.green,  kbp_Cpk_Data_Value.green]
                     };
                    current.setState({
                      series:[red,amber,green]
                    })

                  }).catch((err)=>{
                    console.log("-----err")
                    console.log(err)
                  })
            }

  render() {
    return (
      <>
       <div className="card">
         <div className="card-body p-0">
            <div id="chart" className='position-relative'>
                <p className='kpffre'>KPP</p>
                <Chart options={this.state.options} series={this.state.series} type="bar" height={150} />
            </div>
            <hr className='hr' />
            <KBBChhindwara/>
         </div>
       </div>
      </>
    )
  }
}

export default Dapda
