import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import axios from "axios";
import { token } from "../config"

export class NMBProductionCompilance extends Component {
  constructor(props) {
    super(props);
    this.state = {
       grafChart:null,
    }
  }

  componentDidMount(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
   const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
   var yesterday = new Date(today.getTime() - 24*60*60*1000);
   const formattedYesterdayDate = yesterday.getMonth() + 1 + '/' + yesterday.getDate() + '/' + yesterday.getFullYear();

    let current = this;
      console.log("token")
      console.log(token)
    const passHeader = {
      Authorization: token,
      Accept: "application/json",
        "Content-Type": "application/json",
          };
          // axios.get(`https://bnlwe-gs-q-57322-apimgt-01.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=daily&startDate=2/14/2023&endDate=2/14/2023` , {
          axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetProdComplianceDataForAllFactory?duration=daily&startDate=${formattedYesterdayDate}&endDate=${formattedYesterdayDate}` , {
                headers: passHeader,
          }).then((response) =>{
            console.log("response")
            console.log(response)
              current.setState({
                grafChart:response.data
              },function(){
                var graphValue = current.state.grafChart.prodComplianceDataForAllFactoryResponseDataList[0].proComplianceVal;
                
                var _percent = Number("."+graphValue.toString().replaceAll(".",''));
                console.log("_percent")
                console.log(_percent)
                current.setState({percent:_percent})});

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
            colors={['red', '#F5CD19', '#008000']}
            percent={this.state.percent}
            textColor="#000"
            cornerRadius={1}
            arcPadding={0}
            arcWidth={.3}
            arcsLength={[0.9, 0.05, 0.05]}
         />
      </>
    )
  }
}

export default NMBProductionCompilance