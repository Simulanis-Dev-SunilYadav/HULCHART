import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';
import axios from "axios";



export class Doughnut extends Component {
  constructor(props) {
    super(props);
    this.state = {
       grafChart:null,
       not_Achieved:null,
       _achieved:null,
    }
  }

  componentDidMount() {
    let current = this;
     const passHeader = {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzYwMDY5MTksIm5iZiI6MTY3NjAwNjkxOSwiZXhwIjoxNjc2MDEwODE5LCJhaW8iOiJBVFFBeS84VEFBQUE5QnEwVUdMWnB3c0NSdG82V0M5eVBUa3FaV0s5aTJlUE9HcG9XOThEUk54Mnl5alZWWUdqRGNnenlrNlIvdXhBIiwibmFtZSI6Iml0LCBkYXBhZGEiLCJub25jZSI6IjRjODE2YTIxLTk3MDgtNGNkNy1hOWY0LTBhNmI4NmU2MjdmMyIsIm9pZCI6IjQ5N2EzYTg0LWQ3NDEtNGYyMi05OTkyLTI4MmJkZjk1YTQ4NyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRhcGFkYS5pdEB1bmlsZXZlci5jb20iLCJyaCI6IjAuQVF3QUFxNXY5alpkVzBtXzRIaW1fNS1PYnNkMHV3dC1aVDFPcHIxT2NWUUs0Z0lNQUJ3LiIsInN1YiI6IlV0cE41YVBEckdtQkI1NTFucVBvRDNhWG5XZXVUSFg1SFZndVduNi1nOEUiLCJ0aWQiOiJmNjZmYWUwMi01ZDM2LTQ5NWItYmZlMC03OGE2ZmY5ZjhlNmUiLCJ1dGkiOiJpeExteV9QOFdFeThQVWJodDV6LUFBIiwidmVyIjoiMi4wIn0.otI1gusOVie2HnsYjqjZvdlfP3KOaCct-2-5Mtgq8-m_Lqt8hR46ZtitdbOHHwBmSUtqpu_BxdFE9gIYERZTt-Z27yaat6WBk72XxhXeM7W9ScvauDk3XFrObpW51HjMlCfxx3dopuq4uiIoWJTy7E5zdGAq5gfu10P9qij6bmdQQqC_ACKHUsnHqZJJofN3qSCCGPX7EvYJjTk5uCTOK9s5-wpSnIBvrk_QhnKqhTKUg_hwlHWzikcmImjI59iMpAbxJLRp7FGZoFDO3-x32ACHtI3Zcu_0ZWxho4AB-Dwkr3dq8y_XgcAGXzL5cyiL9IQ7WB7Kq-5zvN1czmQT2A",
          Accept: "application/json",
            "Content-Type": "application/json",
              };
        axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetOEEDashboard?duration=monthly` , {
               headers: passHeader,
        }).then((response) =>{
              current.setState({
                grafChart: response.data
                // grafChart: {"lastUpdate":"01/31/2023","overAllTargetValue":75.8,"factories":[{"factoryID":1,"name":"Dapada","latitude":20.18630000,"longitude":73.01960000,"oee":75.05,"lineCount":8,"targetValue":77.1},{"factoryID":2,"name":"Pondicherry","latitude":11.91606400,"longitude":79.81232500,"oee":71.47,"lineCount":8,"targetValue":74.3},{"factoryID":3,"name":"Chhindwara","latitude":22.05740000,"longitude":78.93820000,"oee":76.80,"lineCount":7,"targetValue":75.0},{"factoryID":4,"name":"Haridwar","latitude":29.94570000,"longitude":78.16420000,"oee":69.69,"lineCount":7,"targetValue":76.7},{"factoryID":5,"name":"Sumerpur","latitude":25.15264500,"longitude":73.08228000,"oee":74.76,"lineCount":4,"targetValue":75.7}]}
              },function(){
                  var Chhindwara = current.state.grafChart.factories.find(item => item.name == "Chhindwara");
                  var Dapada = current.state.grafChart.factories.find(item => item.name == "Dapada");
                  var Haridwar = current.state.grafChart.factories.find(item => item.name == "Haridwar");
                  var Pondicherry = current.state.grafChart.factories.find(item => item.name == "Pondicherry");
                  var Sumerpur = current.state.grafChart.factories.find(item => item.name == "Sumerpur");
                  var notAchieved = (Number(Chhindwara.oee)+Number(Dapada.oee)+Number(Haridwar.oee)+Number(Pondicherry.oee)+Number(Sumerpur.oee))/5;
                  current.setState({not_Achieved:notAchieved});
                  var achieved = (Number(100-notAchieved));
                  current.setState({_achieved:achieved});
              })
        }).catch((err)=>{
          console.log("--err-");
          console.log(err)
        });


  }

  render() {
   var achievedData = this.state.not_Achieved;
   var notAchievedData = this.state._achieved;

    return (
      <>
          <DonutChart
            data={[
                {
                label: 'Not Achieved',
                value: achievedData,
                isEmpty: false,
                },
                {
                label: "NMB OEE",
                value: notAchievedData,
                }
            ]}
            width={300}
            height={300}
            legend={false}
            colors={['red', 'grey']}
            strokeColor='transparent'
         />
         <div className="activeinactive">
              <p><span className='achieved'></span>Target Achieved</p>
              <p><span className='notachieved'></span>Not Achieved</p>
         </div>
      </>
    )
  }
}

export default Doughnut