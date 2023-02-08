import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';

export class Doughnut extends Component {
  render() {
    return (
      <>
          <DonutChart
            data={[
                {
                label: 'NMB OEE',
                value: 75.2,
                isEmpty: false,
                },
                {
                label: 'Not Achieved',
                value: 24.8,
                }
            ]}
            width={300}
            height={300}
            legend={false}
            colors={['green', 'grey']}
            strokeColor='transparent'
         />;
         <div className="activeinactive">
              <p><span className='achieved'></span>Target Achieved</p>
              <p><span className='notachieved'></span>Not Achieved</p>
         </div>
      </>
    )
  }
}

export default Doughnut