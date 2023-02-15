import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import axios from "axios";
import { token } from "../../config"
export class NmbSemichart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      percent:null
    }
  }

  componentDidMount() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
    
    var yesterday = new Date(today.getTime() - 24*60*60*1000);
    const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();

    let current = this;
    const passHeader = {
    Authorization: token,
    Accept: "application/json",
      "Content-Type": "application/json",
        };
    // axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetRMDosingAccuracy?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&duration=daily` , {
       axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetRMDosingAccuracy?startDate=2/14/2023&endDate=2/14/2023&duration=daily` , {
          headers: passHeader,
    }).then((response) =>{
        current.setState({
          data:response.data
        }, function () {
          var _percent = Number('.'+current.state.data.overallNMBValue.toString().replaceAll(".",''));
          current.setState({percent:_percent})
        });

      }).catch((err)=>{
        console.log("--err-");
        console.log(err)
      });


  }

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
