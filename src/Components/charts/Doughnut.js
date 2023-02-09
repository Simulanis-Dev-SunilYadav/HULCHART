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
              Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwYmJiNzRjNy02NTdlLTRlM2QtYTZiZC00ZTcxNTQwYWUyMDIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZjY2ZmFlMDItNWQzNi00OTViLWJmZTAtNzhhNmZmOWY4ZTZlL3YyLjAiLCJpYXQiOjE2NzU5NDU1MzgsIm5iZiI6MTY3NTk0NTUzOCwiZXhwIjoxNjc1OTQ5NDM4LCJhaW8iOiJBVlFBcS84VEFBQUFscVd1NjNxS2Vtc3NnS0RVdUNWTDVuK21kN0dFUkowOHBkd3VTSkNxaS9jTmlsUmxEOEVKQUlnVWs3Y2MxZVh5YWpSTXk0bXViTmJWKzAxT3VCQUp0eXdWaFlZK3hIZ2lrWDNQUDVMeTlEYz0iLCJuYW1lIjoiaXQsIGRhcGFkYSIsIm5vbmNlIjoiMTU1ZjZkOTItNzI3Mi00Njc2LWJmMTMtYjNkYjJiOGVhZmFlIiwib2lkIjoiNDk3YTNhODQtZDc0MS00ZjIyLTk5OTItMjgyYmRmOTVhNDg3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZGFwYWRhLml0QHVuaWxldmVyLmNvbSIsInJoIjoiMC5BUXdBQXE1djlqWmRXMG1fNEhpbV81LU9ic2QwdXd0LVpUMU9wcjFPY1ZRSzRnSU1BQncuIiwic3ViIjoiVXRwTjVhUERyR21CQjU1MW5xUG9EM2FYbldldVRIWDVIVmd1V242LWc4RSIsInRpZCI6ImY2NmZhZTAyLTVkMzYtNDk1Yi1iZmUwLTc4YTZmZjlmOGU2ZSIsInV0aSI6Inlyb1duNFloUmt5cDN3LUtNeTlOQUEiLCJ2ZXIiOiIyLjAifQ.lqC4o2iMcNMDPG7RvFtGkSOW80ndxREuuAg5vTT5k3-hmXbofsBwCAbSMPyD7OoVno4n584gUg6hJvDSebZKheuPA5SMn1_li3C_6DysPuzO8FPh833s9y7gEYJPYV0MKOuXtKjVsxaPpbWvXpJU-yYoZx-8tGtMaYIbTgCeAUSt_d8hJa1RtMbRHEJ4XNPwOf1R4CKwksruImI6xiXgM1yfyDBAW3xUjz1h83Oj69g3gc1TjAY9NzyJN64km__et36WFQVecDrhWYwjgAmCdEZUJ0jC_gha2yD4OCZ7v_C7XJL5BuL4DE1w4PkegXloCBKPaW9C10A4b9VW26YcOg",
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