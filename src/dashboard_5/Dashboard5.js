import React from 'react'
import SclfYTrnd from './SclfYTrnd'
import TargetVActual from './TargetVActual'
import DepotDPMU from './DepotDPMU'
import T5DepotDPMU from './T5DepotDPMU'
import UnitFactory from './UnitFactory'
import DepotLocationInspected from './DepotLocationInspected'
import GapToTarget from './GapToTarget'
import Dashboard2 from "../image/dashboard2.png"


function dashboard5() {
  return (
    <>
           <div>
              <img src={Dashboard2} style={{width: '100%'}} />
           </div>
    {/* <iframe title="Day 0_NMB" style={{width: '100%', height: '100vh'}} src="https://app.powerbi.com/reportEmbed?reportId=373e7ff9-e4f3-40d0-86d1-350cc1e8032f&autoAuth=true&ctid=f66fae02-5d36-495b-bfe0-78a6ff9f8e6e" frameborder="0" allowFullScreen="true"></iframe> */}
        {/* <section className="dashboard3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h3>SCLF Yearly Trend</h3>
                                <SclfYTrnd/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <h3>Target Vs Actual YTD</h3>
                                <div className="row">
                                    <div className="col-md-8 px-1">
                                        <TargetVActual/>
                                    </div>
                                    <div className="col-md-4 px-1">
                                        <GapToTarget/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Depot DPMU By Factory</h3>
                                <DepotDPMU/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <T5DepotDPMU/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <UnitFactory/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Depot DPMU By Location Inspected(Depot)</h3>
                                <DepotLocationInspected/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  )
}

export default dashboard5