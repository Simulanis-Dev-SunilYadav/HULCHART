import React, { Component } from 'react'
import DonutChart from 'react-donut-chart';

export class Doughnut extends Component {
  constructor(props) {
    super(props);
    this.state = {
       grafChart:null,
       not_Achieved:null,
       _achieved:null,
    }
  }

  componentDidMount() {
    let current = this;
    current.setState({
      grafChart: {"lastUpdate":"01/31/2023","overAllTargetValue":75.8,"factories":[{"factoryID":1,"name":"Dapada","latitude":20.18630000,"longitude":73.01960000,"oee":75.05,"lineCount":8,"targetValue":77.1},{"factoryID":2,"name":"Pondicherry","latitude":11.91606400,"longitude":79.81232500,"oee":71.47,"lineCount":8,"targetValue":74.3},{"factoryID":3,"name":"Chhindwara","latitude":22.05740000,"longitude":78.93820000,"oee":76.80,"lineCount":7,"targetValue":75.0},{"factoryID":4,"name":"Haridwar","latitude":29.94570000,"longitude":78.16420000,"oee":69.69,"lineCount":7,"targetValue":76.7},{"factoryID":5,"name":"Sumerpur","latitude":25.15264500,"longitude":73.08228000,"oee":74.76,"lineCount":4,"targetValue":75.7}]}
    },function(){
        var Chhindwara = current.state.grafChart.factories.find(item => item.name == "Chhindwara");
        var Dapada = current.state.grafChart.factories.find(item => item.name == "Dapada");
        var Haridwar = current.state.grafChart.factories.find(item => item.name == "Haridwar");
        var Pondicherry = current.state.grafChart.factories.find(item => item.name == "Pondicherry");
        var Sumerpur = current.state.grafChart.factories.find(item => item.name == "Sumerpur");
        var notAchieved = (Number(Chhindwara.oee)+Number(Dapada.oee)+Number(Haridwar.oee)+Number(Pondicherry.oee)+Number(Sumerpur.oee))/5;
        current.setState({not_Achieved:notAchieved});
        var achieved = (Number(100-notAchieved));
        current.setState({_achieved:achieved});
    })
  }

  render() {
   var achievedData = this.state.not_Achieved;
   var notAchievedData = this.state._achieved;

    return (
      <>
          <DonutChart
            data={[
                {
                label: 'Not Achieved',
                value: achievedData,
                isEmpty: false,
                },
                {
                label: "NMB OEE",
                value: notAchievedData,
                }
            ]}
            width={300}
            height={300}
            legend={false}
            colors={['red', 'grey']}
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