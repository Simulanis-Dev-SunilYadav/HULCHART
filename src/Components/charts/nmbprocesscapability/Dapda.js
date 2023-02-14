import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import KBBDapada from './KBBDapada';
import axios from "axios";


export class Dapda extends Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [{
              name: 'Marine Sprite',
              data: [100, 50]
            }, {
              name: 'Striking Calf',
              data: [53, 32]
            }, {
              name: 'Tank Picture',
              data: [32, 17]
            }],
            options: {
              colors:['#d50707', '#3ca55f', '#e5b52d'],
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
                    return val + "K"
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
           let current = this;
            const passHeader = {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzYwMTA4NjUsIm5iZiI6MTY3NjAxMDg2NSwiZXhwIjoxNjc2MDE0NzY1LCJhaW8iOiJBVFFBeS84VEFBQUFIc3pnVE1uVzhXRkl2ck5LQzVwU1BsYjdjUkU5WTZjWGRvQkhCNVowMElkdTNUR3EzaXNZcTBYNUtkQVZucmtoIiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6IjY1Mzc2ZjZhLTYzOTYtNGM1Mi04MDViLTgxYTc4ZmQ0MmZhNiIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiJkVlFpY0ZIZFprdUJhZkNQMGlpcEFBIiwidmVyIjoiMi4wIn0.mmjmTEDMumfoLDEeL9IZ3f5Y65gneZu04ForctGJI9EGSgp74Q_fiXM9jE61E7LKbn_sNFOjL-_fR4C9alKudGuU0KjsYCywde_4xmGm1Ri0lbjtJ71unqV421U9wKuaGxp5WtRPrtAoCqusrEwa7eTiQo3SohA_55tt6GRY2Qo5d-GsmB_C_ycgjcIqaSoQdiTuMXr8vkO3CzKmQI_Z_63K4zFM8aizSCC9KdPDQLU55ygSQ2LFpHS-jPOZZuz2YziXXOudgBDVCxUHHAsQuAJuNNPWGoxzjLexb90lxT81cBeB-y4Y2wk0_WlLueySuKW4q0dW9AHLfWHZA8Zbwg",
                Accept: "application/json",
                "Content-Type": "application/json",
                };
                axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetKPPKBP?date=02/10/2023` , {
                  headers: passHeader,
                  }).then((response) =>{
                    console.log("-----response")
                    // console.log(response)
                    const dapda = response.data.kBPKPPFactoryList
                    const dapadData = dapda.filter(item => item.factoryName)
                    // var dapadData =  dapda.find(item => item.factoryName == "Dapada");
                    // console.log(dapadData)

                    // const dapda = response.data.kBPKPPFactoryList
                    // var dapadData =  dapda.find(item => item.factoryKPP.factoryKppCpValue == "amber");
                    console.log(dapadData)

                    // const dapda = response
                    // // const newdapda = dapda.find(0)
                    // console.log(response);
                    // var valueArray = [response.data.overAllKPP.totalKppCpValue.red,   response.data.overAllKPP.totalKppCpValue.amber,  response.data.overAllKPP.totalKppCpValue.green]
                    // current.setState({
                    //   series: valueArray
                    // })
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
            <KBBDapada/>
         </div>
       </div>
      </>
    )
  }
}

export default Dapda
