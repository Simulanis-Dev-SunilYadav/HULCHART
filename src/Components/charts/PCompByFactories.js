import React, { Component } from 'react'
import Chart from "react-apexcharts";


export class PCompByFactories extends Component {
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
                      fillColor: '#8B0000'
                  },
                      {
                      x: '',
                      y: 60,
                      fillColor: '#8B0000'
                  },
                  {
                      x: '',
                      y: 70,
                      fillColor: '#8B0000'
                  },
                      {
                      x: '',
                      y: 100,
                      fillColor: '#006400'
                  },
               ]
             },
          ],
          options: {
            chart: {
                toolbar: {
                    show: false
                    },
            //   height: 600,
            //   type: 'bar',
              events: {
                click: function(chart, w, e) {
                  // console.log(chart, w, e)
                }
              }
            },
          //   colors: colors,
            plotOptions: {
              bar: {
                columnWidth: '45%',
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
                ['Chindwara'],
                ['Dapda'],
                ['Haridwar'],
                ['Pondicherry'],
                ['Sumerpur'],
              //   ['Joe', 'Smith'],
              //   ['Jake', 'Williams'],
              //   'Amber',
              //   ['Peter', 'Brown'],
              //   ['Mary', 'Evans'],
              //   ['David', 'Wilson'],
              //   ['Lily', 'Roberts'],
              ],
              labels: {
                style: {
                  // colors: colors,
                  fontSize: '14px',
                  color :"#939393",
                  fontWeight: "700",
                  fontFamily: "Arial, Helvetica, sans-serif"

                }
              }
            },
            yaxis:{
                axisBorder: {
                    show: true
                  },
                  labels:{
                  style: {
                    color: "#939393",
                    fontWeight:"600",
                    fontFamily: "Arial, Helvetica, sans-serif"
                  }
                }
            },
            title: {
              text: "Production Compliance by Factories",
              style:{
                fontSize:18,
                color:"#454545",
                fontFamily: "Arial, Helvetica, sans-serif"
              }
          },
          grid:{
            show:false
          }
          }
        };
      }
  render() {
    return (
      <>
                      <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
              height="350"

            />
      </>
    )
  }
}

export default PCompByFactories