import React, { Component } from 'react'
import GaugeChart from 'react-gauge-chart'


export class DosingAccuracyP extends Component {
  render() {
    return (
      <>
          <GaugeChart id="gauge-chart2" colors={["#e22f2f", "#f5cd19", 'green']}   percent={1}  />
      </>
    )
  }
}

export default DosingAccuracyP
