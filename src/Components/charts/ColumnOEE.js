import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import axios from 'axios'

export class ColumnOEE extends Component {
    constructor(props) {
        super(props);
        this.state = {

        series: [
            {
            name: 'PRODUCT A',
            data: [
                {
                    x: '',
                    y: 120,
                    fillColor: '#006400'
                },
                {
                    x: '',
                    y: 80,
                    fillColor: '#e10f0f'
                },
                {
                    x: '',
                    y: 60,    
                    fillColor: '#e10f0f'
                },
                {
                    x: '',
                    y: 70,
                    fillColor: '#e10f0f'
                },
                {
                    x: '',
                    y: 100,
                    fillColor: '#e10f0f'
                },
                ]
            }, 
        ],
        options: {
            chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                }
            },
            },
       
            plotOptions: {
            bar: {
                columnWidth: '55%',
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
             
                fontSize: '12px'
                }
            }
            }
        },
        };
    }
    

    componentDidMount() {
      console.clear();
    //   this.getOeeDashboard();
    }

    getOeeDashboard = () =>{
      const passHeader = { Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU4NTEzNDYsIm5iZiI6MTY3NTg1MTM0NiwiZXhwIjoxNjc1ODU1MjQ2LCJhaW8iOiJBVFFBeS84VEFBQUE2UG5sZW1aTW5KVmxSR2x0RlNZRk9GZlVoVlo3NTgyVXNGTzJsS0NQRzhCcDNqR21hK2NNVUF3VTJ6eC96ZWp4IiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6ImYzZGNiMWM2LTBmNTQtNGJmMi1hMDAyLTM5NjAwMjFlN2E2ZiIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiIyVC1xWmU1MFRVaUl5NUdZNWRsN0FBIiwidmVyIjoiMi4wIn0.NvnuaDVecGtqjv9O-ijyf-PJ_T-svnjY1vKNfLi3UUkX1wsrSXNx5Vjo3ST31o2sHAdze88zHK3QIbVOCnLuZiupR3Iz-Lqh1k5e7BjbhhwaouUKJWc8aUAPL7g3ZIUnCWYufdcRGHafqvCAnS6_IpVLBczbIiMXlOTjtw_bGBDCsSDk8DupzvN-PFIeO8xdlwYj9FmFpXp6WU8hLcCIhjFdrx9NVOdURAIEsERzhxBJq05rXqi-TIG0je_9yqNiW0sdO6J5GIztAs36tUNdcAyaeIby7dhRhuVosWg6dGMehpgeiZH7SdDXKL_YUXkxudJJXbGFhkxnwKj1v-X3fw' ,
    };
    
      axios.get(`http://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetOEEDashboard?duration=Yearly` , {
        headers: passHeader,
      }).then((response) =>{
            console.log("--response-");
            console.log(response)
      }).catch((err)=>{
        console.log("--err-");
        console.log(err)
      });

        var data = {
               "lastUpdate":"01/31/2023",
               "overAllTargetValue":75.8,
               "factories":[
                       {"factoryID":1,"name":"Dapada","latitude":20.18630000,"longitude":73.01960000,"oee":75.05,"lineCount":8,"targetValue":77.1},
                       {"factoryID":2,"name":"Pondicherry","latitude":11.91606400,"longitude":79.81232500,"oee":71.47,"lineCount":8,"targetValue":74.3},
                       {"factoryID":3,"name":"Chhindwara","latitude":22.05740000,"longitude":78.93820000,"oee":76.80,"lineCount":7,"targetValue":75.0},
                       {"factoryID":4,"name":"Haridwar","latitude":29.94570000,"longitude":78.16420000,"oee":69.69,"lineCount":7,"targetValue":76.7},
                       {"factoryID":5,"name":"Sumerpur","latitude":25.15264500,"longitude":73.08228000,"oee":74.76,"lineCount":4,"targetValue":75.7}
                    ]
                }
        var Chhindwara = data.factories.find(item => item.name == "Chhindwara");
        var Dapada = data.factories.find(item => item.name == "Dapada");
        var Haridwar = data.factories.find(item => item.name == "Haridwar");
        var Pondicherry = data.factories.find(item => item.name == "Pondicherry");
        var Sumerpur = data.factories.find(item => item.name == "Sumerpur");
   
        let current = this;
        current.setState({
          series: [
            {
            name: 'OEE',
            data: [
                {
                    x: '',
                    y: `${Chhindwara.oee}`,
                    fillColor: `${Chhindwara.oee}` > `${Chhindwara.targetValue}` ? '#006400' : '#e10f0f'
                },
                {
                    x: '',
                    y: `${Dapada.oee}`,
                    fillColor: `${Dapada.oee}` > `${Dapada.targetValue}` ? '#006400' : '#e10f0f'
                },
                {
                    x: '',
                    y: `${Haridwar.oee}`,    
                    fillColor: `${Haridwar.oee}` > `${Haridwar.targetValue}` ? '#006400' : '#e10f0f'
                },
                {
                    x: '',
                    y: `${Pondicherry.oee}`,
                    fillColor: `${Pondicherry.oee}` > `${Pondicherry.targetValue}` ? '#006400' : '#e10f0f'
                },
                {
                    x: '',
                    y: `${Sumerpur.oee}`,
                    fillColor: `${Sumerpur.oee}` > `${Sumerpur.targetValue}` ? '#006400' : '#e10f0f'
                },
                ]
            }, 
        ]
        })
            
    }



  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
         <div className="activeinactive">
            <p><span className='achieved'></span>Target Achieved</p>
            <p><span className='notachieved'></span>Not Achieved</p>
         </div>
      </>
    )
  }
}

export default ColumnOEE
