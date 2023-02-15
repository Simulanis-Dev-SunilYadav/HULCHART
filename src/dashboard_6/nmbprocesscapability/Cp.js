import axios from 'axios';
import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import { token } from "../../config"

export class Cp extends Component {
        constructor(props) {
          super(props);
          this.state = {
            series: [44, 55, 13],
            options: {
              colors: ['#d50707', '#f4ca16', '#0b723b'],
              chart: {
                width: 380,
                type: 'pie',
              },
                legend: {
                    position: 'bottom',
                    show:false
                },
              labels: ['<1', '>1.33', '1-1.33'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom',
                    show:false,
                  }
                }
              }]
            },
          };
        }



         componentDidMount(){
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
              axios.get(`https://bnlwe-gs-d-57321-apimgt.azure-api.net/nmbapi/GetKPPKBP?date=${formattedTodayDate}` , {
                headers: passHeader,
                }).then((response) =>{
                  var valueArray = [response.data.overAllKPP.totalKppCpValue.red,   response.data.overAllKPP.totalKppCpValue.amber,  response.data.overAllKPP.totalKppCpValue.green]
                  current.setState({
                    series: valueArray
                  })
                }).catch((err)=>{
                   console.log("-----err")
                  console.log(err)
                })

    }




  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="pie" width="100%" />
        </div>
      </>
    )
  }
}

export default Cp