import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'
import { token } from "../../config"

export class NMBega extends Component {
  render() {
    return (
      <>
         <GaugeChart 
         id="gauge-chart2"
          colors={["red", "#f5cd19", 'green']}   
          percent={.65} 
          cornerRadius={1}
            arcPadding={0}
            arcWidth={.3}
            arcsLength={[0.9, 0.05, 0.05]}
           />
      </>
    )
  }
}

export default NMBega
