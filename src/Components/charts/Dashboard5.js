import React from 'react'
import SclfYTrnd from './SclfYTrnd'
import TargetVActual from './TargetVActual'
import DepotDPMU from './DepotDPMU'
import T5DepotDPMU from './T5DepotDPMU'
import UnitFactory from './UnitFactory'
import DepotLocationInspected from './DepotLocationInspected'

function dashboard5() {
  return (
    <>
        <section className="dashboard3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>SCLF Yearly Trend</h3>
                                <SclfYTrnd/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Target Vs Actual YTD</h3>
                                <div className="row">
                                    <div className="col-md-9">
                                        <TargetVActual/>
                                    </div>
                                    <div className="col-md-3">
                                        {/* <GapToTarget/> */}
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
        </section>
    </>
  )
}

export default dashboard5