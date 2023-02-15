import React, { Component } from 'react'
import Doughnut1 from './Doughnut1'
import Doughnut2 from './Doughnut2'

export class Dashboard9 extends Component {
  render() {
    return (
      <>
          <section className="dashboard9">
              <div className="dashheader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3>Production Compliance</h3>
                        </div>
                        <div className="col-md-4">
                            <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#all" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Daily</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#wtd" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">WTD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#mtd" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">MTD</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#ytd" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">YTD</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            {/* <DateRangePicker /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container scrolcomnt">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>LINE WISE OEE - CHHINDWARA</h2>
                            </div>
                            <div className="col-md-5">
                                {/* <ul className="nav nav-pills d9fgg justify-content-end mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Line Wise</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SKU Wise</button>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                        <h5>Factory - Chhindwara</h5>
                        <div className="tab-content" id="pills-tabContent">
                            <br />
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="lwisesbox">
                                            <h3 className='text-center'>Chhindwara</h3>
                                            <Doughnut1/>
                                            <div className="activeinactive mt-4"><p><span className="achieved"></span>Target Achieved</p><p><span className="notachieved"></span>Not Achieved</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP5</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP6</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP7</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP8</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP9</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP10</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="donut2boxs">
                                            <p>MP11</p>
                                            <Doughnut2/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className='table mt-5'>
                            <thead>
                                <tr>
                                    <th>Top 5 losses</th>
                                    <th className='text-center'>Minutes</th>
                                    <th className='text-center'>(loss time/total loss time)*100</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Minor Stoppages and idling time</td>
                                    <td className='text-center'>4.9</td>
                                    <td className='text-center'>27.51</td>
                                </tr>
                                <tr>
                                    <td>Minor Stoppages and idling time</td>
                                    <td className='text-center'>4.9</td>
                                    <td className='text-center'>27.51</td>
                                </tr>
                                <tr>
                                    <td>Minor Stoppages and idling time</td>
                                    <td className='text-center'>4.9</td>
                                    <td className='text-center'>27.51</td>
                                </tr>
                                <tr>
                                    <td>Minor Stoppages and idling time</td>
                                    <td className='text-center'>4.9</td>
                                    <td className='text-center'>27.51</td>
                                </tr>
                                <tr>
                                    <td>Minor Stoppages and idling time</td>
                                    <td className='text-center'>4.9</td>
                                    <td className='text-center'>27.51</td>
                                </tr>
                            </tbody>
                        </table>
                            
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </>
    )
  }
}

export default Dashboard9
