import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'


export class NmbSemichart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      percent:null
    }
  }

  componentDidMount() {
  let current = this;
      current.setState({
        data: {
          "lastUpdate": "2023-02-09T09:18:22.51",
          "overallNMBValue": 97.83,
          "rmDosingAccuracyData": {
            "overallCount": {
              "totalSite": 3,
              "totalBatch": 85,
              "totalCascade": 10,
              "totalUniqueRM": 10
            },
            "siteWiseDosingAccuracy": [
              {
                "factoryID": 1,
                "factoryName": "Dapada",
                "averageValue": 103.49
              },
              {
                "factoryID": 2,
                "factoryName": "Pondicherry",
                "averageValue": 98.6
              },
              {
                "factoryID": 3,
                "factoryName": "Chhindwara",
                "averageValue": 91.39
              }
            ],
            "rmWiseDosingAccuracy": [
              {
                "rmDosingName": "LABSA",
                "averageValue": 99.38
              },
              {
                "rmDosingName": "SODAL",
                "averageValue": 96.83
              },
              {
                "rmDosingName": "FRISIS",
                "averageValue": 99.69
              },
              {
                "rmDosingName": "SILICATE",
                "averageValue": 96.92
              },
              {
                "rmDosingName": "PERFUME",
                "averageValue": 98.89
              },
              {
                "rmDosingName": "PHOSPHORIC",
                "averageValue": 99.47
              },
              {
                "rmDosingName": "FELDSPAR",
                "averageValue": 97.02
              },
              {
                "rmDosingName": "STPP",
                "averageValue": 91.84
              },
              {
                "rmDosingName": "HA20",
                "averageValue": 99.39
              },
              {
                "rmDosingName": "COLOR",
                "averageValue": 99.78
              }
            ]
          }
        }

      }, function () {
        var _percent = Number('.'+current.state.data.overallNMBValue.toString().replaceAll(".",''));
        console.log("_percent")
        console.log(_percent)
        current.setState({percent:_percent})

      });

  }
  //   const passHeader = { Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU4NTEzNDYsIm5iZiI6MTY3NTg1MTM0NiwiZXhwIjoxNjc1ODU1MjQ2LCJhaW8iOiJBVFFBeS84VEFBQUE2UG5sZW1aTW5KVmxSR2x0RlNZRk9GZlVoVlo3NTgyVXNGTzJsS0NQRzhCcDNqR21hK2NNVUF3VTJ6eC96ZWp4IiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6ImYzZGNiMWM2LTBmNTQtNGJmMi1hMDAyLTM5NjAwMjFlN2E2ZiIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiIyVC1xWmU1MFRVaUl5NUdZNWRsN0FBIiwidmVyIjoiMi4wIn0.NvnuaDVecGtqjv9O-ijyf-PJ_T-svnjY1vKNfLi3UUkX1wsrSXNx5Vjo3ST31o2sHAdze88zHK3QIbVOCnLuZiupR3Iz-Lqh1k5e7BjbhhwaouUKJWc8aUAPL7g3ZIUnCWYufdcRGHafqvCAnS6_IpVLBczbIiMXlOTjtw_bGBDCsSDk8DupzvN-PFIeO8xdlwYj9FmFpXp6WU8hLcCIhjFdrx9NVOdURAIEsERzhxBJq05rXqi-TIG0je_9yqNiW0sdO6J5GIztAs36tUNdcAyaeIby7dhRhuVosWg6dGMehpgeiZH7SdDXKL_YUXkxudJJXbGFhkxnwKj1v-X3fw' ,
    // };
    
    //   axios.get(`GetRMDosingAccuracy?startDate=2/7/2023&endDate=2/7/2023&duration=daily` , {
    //     headers: passHeader,
    //   }).then((response) =>{
    //         console.log("--response-");
    //         console.log(response)
    //   }).catch((err)=>{
    //     console.log("--err-");
    //     console.log(err)
      // });

    


         
        // var Chhindwara = data.factories.find(item => item.name == "Chhindwara");
        // var Dapada = data.factories.find(item => item.name == "Dapada");
        // var Haridwar = data.factories.find(item => item.name == "Haridwar");
        // var Pondicherry = data.factories.find(item => item.name == "Pondicherry");
        // var Sumerpur = data.factories.find(item => item.name == "Sumerpur");




  render() {
    return (
      <>
        <GaugeChart 
          id="gauge-chart2"
          colors={['#e22f2f', '#F5CD19', '#008000']}
          percent={this.state.percent}
          textColor="#000"
        />
      </>
    )
  }
}

export default NmbSemichart
