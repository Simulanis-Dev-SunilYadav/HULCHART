import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';


export class Doughnut2 extends Component {
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
                    isEmpty: true,
                },
            ]}
            width={150}
            height={150}
            legend={false}
            colors={['#0b723b', '#a9a9a9']}
            strokeColor='transparent'
            emptyOffset={.0001}
            onMouseEnter={false}
            onClick={false}
            clickToggle={false}
            
          />
      </>
    )
  }
}

export default Doughnut2
