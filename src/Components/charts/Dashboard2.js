import React from 'react'
import PCompByFactories from './PCompByFactories'
import NMBProductionCompilance from './NMBProductionCompilance'
import PdataComp from './PdataComp'
import { DateRangePicker } from 'rsuite';


function dashboard2() {
  return (
    <>
        <section className="dashboard1 pt-0">
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
            <div className="container">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body gause1">
                                        <h3 className='mb-5'>NMB Production Compilance</h3>
                                        <NMBProductionCompilance/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <PCompByFactories/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <PdataComp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="wtd" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body gause1">
                                        <h3 className='mb-5'>NMB Production Compilance</h3>
                                        <NMBProductionCompilance/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <PCompByFactories/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <PdataComp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="mtd" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body gause1">
                                        <h3 className='mb-5'>NMB Production Compilance</h3>
                                        <NMBProductionCompilance/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <PCompByFactories/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <PdataComp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="ytd" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body gause1">
                                        <h3 className='mb-5'>NMB Production Compilance</h3>
                                        <NMBProductionCompilance/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <PCompByFactories/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="card">
                                    <div className="card-body">
                                        <PdataComp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default dashboard2