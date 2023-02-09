import React from 'react'
import PCompByFactories from './PCompByFactories'
import NMBProductionCompilance from './NMBProductionCompilance'
import PdataComp from './PdataComp'

function dashboard2() {
  return (
    <>
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
        
    </>
  )
}

export default dashboard2