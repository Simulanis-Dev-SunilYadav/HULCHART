import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';


export class Doughnut1 extends Component {
  render() {
    return (
      <>
        <DonutChart
            data={[
                {
                    label: 'Tgt-75.38',
                    value: 85,
                },
                {
                    label: '',
                    value: 15,
                    // isEmpty: true,
                },
            ]}
            width={250}
            height={250}
            legend={false}
            colors={['#0b723b', '#a9a9a9']}
            strokeColor='transparent'
            emptyOffset={.0001}
            onMouseEnter={true}
            onClick={false}
            clickToggle={false}          
          />
      </>
    )
  }
}

export default Doughnut1
