import React, { Component } from 'react'
import Chart from "react-apexcharts";


export class SitewisepEGA extends Component {
            constructor(props) {
        super(props);
        this.state = {
          series: [
              {
              name: '',
              data: [
                    {
                      x: '',
                      y: 120,
                      fillColor: '#006400'
                    },
                    {
                      x: '',
                      y: 80,
                      fillColor: '#bb596a'
                    },
                    {
                      x: '',
                      y: 60,
                      fillColor: '#2191d3'
                    },
                    {
                      x: '',
                      y: 70,
                      fillColor: '#8f21d3'
                    },
                    {
                      x: '',
                      y: 100,
                      fillColor: '#525252'
                    },
               ]
             },
          ],
          options: {
            chart: {
                toolbar: {
                    show: false
                    },
              events: {
                click: function(chart, w, e) {
                }
              }
            },
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
                ['Chhindwara'],
                ['Dapada'],
                ['Haridwar'],
                ['Pondicherry'],
                ['Sumerpur'],
              ],
              labels: {
                style: {
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
              text: "Sitewise % EGA",
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
                width="100%"
                height="350"
            />
      </>
    )
  }
}

export default SitewisepEGA
