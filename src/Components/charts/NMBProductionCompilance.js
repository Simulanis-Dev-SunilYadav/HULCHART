import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'


export class NMBProductionCompilance extends Component {
  constructor(props) {
    super(props);
    this.state = {
       grafChart:null,
    }
  }

  componentDidMount(){
    let current = this;
    current.setState({
      grafChart:{
        "prodComplianceDataForAllFactoryResponseDataList": [
          {
            "proComplianceVal": "66.6338582677165354"
          }
        ],
        "factories": [
          {
            "name": "Chhindwara",
            "prodCompliancePercentage": "159.375000"
          },
          {
            "name": "Dapada",
            "prodCompliancePercentage": "67.626700"
          },
          {
            "name": "Haridwar",
            "prodCompliancePercentage": "42.345700"
          },
          {
            "name": "Pondicherry",
            "prodCompliancePercentage": "86.287600"
          },
          {
            "name": "Sumerpur",
            "prodCompliancePercentage": "110.989000"
          }
        ],
        "sKUs": [
          {
            "skuName": "NIL MINERAL BAR 400G -BIS - Rs.62",
            "prodComplianceVal": "127.777700"
          },
          {
            "skuName": "SURF EXCEL BAR 250 GM",
            "prodComplianceVal": "120.930200"
          },
          {
            "skuName": "SURF EXCEL BAR 250G BIS",
            "prodComplianceVal": "98.412600"
          },
          {
            "skuName": "SURF EXCEL BAR FW 100G",
            "prodComplianceVal": "108.000000"
          },
          {
            "skuName": "SURF EXCEL BAR FW 100G - 140 CC",
            "prodComplianceVal": "105.586500"
          },
          {
            "skuName": "SURF EXCEL BAR FW 150+50 GM",
            "prodComplianceVal": "105.806400"
          },
          {
            "skuName": "SURF EXCEL BAR FW 150G",
            "prodComplianceVal": "95.061700"
          },
          {
            "skuName": "SURF EXCEL BAR FW 400G",
            "prodComplianceVal": "114.285700"
          },
          {
            "skuName": "SURF EXCEL BAR FW 80G",
            "prodComplianceVal": "77.689200"
          },
          {
            "skuName": "SURF EXCEL BAR FW 84G 140 CC",
            "prodComplianceVal": "25.527500"
          },
          {
            "skuName": "SURF EXCEL BAR FW 84G BIS",
            "prodComplianceVal": "150.000000"
          },
          {
            "skuName": "SURF EXCEL BAR FW 84G BIS 140 CC",
            "prodComplianceVal": "125.806400"
          },
          {
            "skuName": "SURF EXCEL BAR MPK 4x200G",
            "prodComplianceVal": "165.420500"
          },
          {
            "skuName": "SURF EXCEL BAR MPK 4x200G",
            "prodComplianceVal": "197.297200"
          },
          {
            "skuName": "SURF EXCEL BAR MPK 4x200G OFFER",
            "prodComplianceVal": "25.225200"
          }
        ]
      }
    },function(){
       var graphValue = current.state.grafChart.prodComplianceDataForAllFactoryResponseDataList[0].proComplianceVal;
       var _percent = Number("."+graphValue.toString().replaceAll(".",''));
       current.setState({percent:_percent})});
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

export default NMBProductionCompilance