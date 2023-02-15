import React from 'react'
import Doughnut from './charts/Doughnut'
import ColumnOEE from './charts/ColumnOEE'
import NmbSemichart from './charts/NmbSemichart'
import SitewisePDosing from './charts/SitewisePDosing'
import SclfYTrnd from './charts/SclfYTrnd'
import TargetVActual from './charts/TargetVActual'
import GapToTarget from './charts/GapToTarget'
import DepotDPMU from './charts/DepotDPMU'
import T5DepotDPMU from './charts/T5DepotDPMU'
import UnitFactory from './charts/UnitFactory'
import DepotLocationInspected from './charts/DepotLocationInspected'
import PCompByFactories from './charts/PCompByFactories'
import NMBProductionCompilance from './charts/NMBProductionCompilance'
import PdataComp from './charts/PdataComp'
import Analysis from './charts/analysis'
import LineDotted from './charts/dottedline'
import { token } from "../config"


function DolphinUniliver() {
  return (
    <>
        <section className="dashboard0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Analysis />
                    </div>

                    <div className="col-md-6">
                        <LineDotted />
                    </div>
                </div>
            </div>
        </section>

        <section className="dashboard1">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body gause1">
                                <h3>NMB Production Compilance</h3>
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
        </section>
        
        <section className="dashboard">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3>Factory wise OEE</h3>
                    </div>
                    <div className="col-md-4">
                        <select className='form-control'>
                            <option value="0">Select a factory</option>
                            <option value="0">Dapada</option>
                            <option value="0">Haridwar</option>
                            <option value="0">Pondicherry</option>
                            <option value="0">Sumerpur</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className='card-body doughnt'>
                                <Doughnut/>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <ColumnOEE/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="dashboard2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body gause">
                                <h3>NMB Dosing Accuracy</h3>
                                <NmbSemichart/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h3>Site wise % Dosing Accuracy</h3>
                                <SitewisePDosing/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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

export default DolphinUniliver