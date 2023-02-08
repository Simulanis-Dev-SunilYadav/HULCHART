import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'


export class NMBProductionCompilance extends Component {
  render() {
    return (
      <>
        <GaugeChart 
            id="gauge-chart2"
            colors={['#e22f2f', '#F5CD19', '#008000']}
            percent={0.89}
            textColor="#000"
         />
      </>
    )
  }
}

export default NMBProductionCompilance