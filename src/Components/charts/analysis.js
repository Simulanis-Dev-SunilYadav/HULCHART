import react from 'react';
import Chart from "react-apexcharts";
import { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

var now = 80;
class   Analysis extends Component {
   
    render(){
    return (
    <>
    <div style={{display:'flex'}}>
        <div className='yearly-progress'>

            <div className='up-progress'>
                <div className='progress2020'>
                    <div>2020</div>
                    <div>74%</div>
                </div>
                <div className='progress2021'>
                <div>2021</div>
                <div>85%</div>
                </div>
            </div>

            
            <div className='down-progress'>
                <div className='progress2022'>
                <div>2022</div>
                <div>84%</div>
                </div>
                <div className='progress2023'>
                <div>2023</div>
                <div>90%</div>
                </div>

            </div>

        </div>

        <div className='progress-table'>
            <p>Day 0 By Basepack</p>
        <table>
        <thead>
  <tr>
    <th>Basepack</th>
    <th>%CT Order CLD</th>
    <th>%CT Order CLDs</th>
    <th>Day 0</th>
  </tr>

  </thead>
  
  <tbody>
  <tr>
    <td>16020 : NIL MINERAL BAR 250G</td>
    <td>
    <ProgressBar now={30} label={`${30}%`} />
    </td>
    <td><ProgressBar now={40} label={`${40}%`} /></td>
    <td><ProgressBar now={85} label={`${85}%`} /></td>

</tr>
  <tr>
    <td>16018 : NIL MINERAL BAR RS.10</td>
    <td><ProgressBar now={55} label={`${55}%`} /></td>
    <td><ProgressBar now={50} label={`${50}%`} /></td>
    <td><ProgressBar now={84} label={`${84}%`} /></td>
  </tr>
  <tr>
    <td>16023 : NIL MINERAL BAR RS.15</td>
    <td><ProgressBar now={7} label={`${6}%`} /></td>
    <td><ProgressBar now={20} label={`${20}%`} /></td>
    <td><ProgressBar now={80} label={`${80}%`} /></td>
  </tr>
  <tr>
  <td>16094 : NIL MINERAL BAR 800G</td>
  <td><ProgressBar now={30} label={`${30}%`} /></td>
  <td><ProgressBar now={30} label={`${30}%`} /></td>
  <td><ProgressBar now={30} label={`${30}%`} /></td>
  </tr>

  <tr>
  <td>16094 : NIL MINERAL BAR 800G</td>
  <td><ProgressBar now={0} label={`${0}%`} /></td>
  <td><ProgressBar now={5} label={`${5}%`} /></td>
  <td><ProgressBar now={51} label={`${51}%`} /></td>
  </tr>
  </tbody>
</table>




        </div>

        </div>
        </>
        );
    }
  }

  export default Analysis;