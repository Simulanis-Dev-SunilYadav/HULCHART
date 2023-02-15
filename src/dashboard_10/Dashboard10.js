import React, { Component } from 'react'
import SkuOee from './SkuOee'

export class Dashboard10 extends Component {
  render() {
    return (
      <>
           <section className="dashboard9">
              <div className="dashheader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3>Factory Wise OEE</h3>
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
                                <h2>SKU WISE OEE - CHHINDWARA</h2>
                            </div>
                            <div className="col-md-5">
                            </div>
                            <div className="col-md-3">

                            </div>
                        </div>
                        <h5>Factory - Chhindwara</h5>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <SkuOee/>
                                <div className="activeinactive mt-4 mb-4"><p><span className="achieved"></span>Target Achieved</p><p><span className="notachieved"></span>Not Achieved</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </>
    )
  }
}

export default Dashboard10
