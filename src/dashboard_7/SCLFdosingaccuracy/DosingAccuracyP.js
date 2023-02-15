import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import { token } from "../../config"
import axios from "axios";
export class DosingAccuracyP extends Component {
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
    // axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetSiteWiseRMDosingAccuracy?startDate=${formattedTodayDate}&endDate=${formattedTodayDate}&duration=daily` , {
       axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetSiteWiseRMDosingAccuracy?startDate=2/14/2023&endDate=2/14/2023&factoryId=1&duration=daily` , {
          headers: passHeader,
    }).then((response) =>{
      console.clear();
        current.setState({
          data:response.data.siteWiseOverallNMBValue
        }, function () {
          var _percent = Number('.'+current.state.data.toString().replaceAll(".",''));
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
          colors={["red", "#f5cd19", 'green']}
          cornerRadius={1}   
          percent={this.state.percent}
          arcPadding={0}
          arcWidth={.3}
          arcsLength={[0.9, 0.05, 0.05]}
            />
      </>
    )
  }
}

export default DosingAccuracyP
