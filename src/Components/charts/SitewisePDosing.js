import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export class SitewisePDosing extends Component {
        constructor(props) {
          super(props);
          this.state = {
            data:null,
            series: [{
              name: "SCLF Yearly Trend",
              data: [{
                x: 'Chhindwara',
                y: '5'
              }, {
                x: 'Dapada',
                y: '2'
              }, {
                x: 'Pondicherry',
                y: '3'
              },
            ]
            }],
            options: {
              chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                height: 380
              },
              xaxis: {
                type: 'category',
                labels: {
                  formatter: function(val) {
                    // return "Q" + dayjs(val).quarter()
                  }
                },
                group: {
                  style: {
                    fontSize: '10px',
                    fontWeight: 700
                  },
                  groups: [
                    { title: 'Chhindwara', cols: 1 },
                    { title: 'Dapada', cols: 1 },
                    { title: 'Pondicherry', cols: 1 },
                  ]
                }
              },
            //   title: {
            //       text: 'Grouped Labels on the X-axis',
            //   },
            //   tooltip: {
            //     x: {
            //       formatter: function(val) {
            //         // return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
            //       }  
            //     }
            //   },
            },
          
          
          };
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
                var ChhindwaraData = current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Chhindwara");;
                var Dapada =  current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Dapada");
                var Pondicherry = current.state.data.rmDosingAccuracyData.siteWiseDosingAccuracy.find(item => item.factoryName == "Pondicherry");

               current.setState({
                series: [{
                  name: "Value",
                  data: [{
                    x: 'Chhindwara',
                    y: ChhindwaraData.averageValue
                  }, {
                    x: 'Dapada',
                    y: Dapada.averageValue
                  }, {
                    x: 'Pondicherry',
                    y: Pondicherry.averageValue
                  },
                ]
                }]
               })
        
              });
        
          }


        
  render() {
    return (
      <>
        <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <p className='text-center'>% Dosing Accuracy</p>
      </>
    )
  }
}

export default SitewisePDosing