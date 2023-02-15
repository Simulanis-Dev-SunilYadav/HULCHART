import React from 'react' 
import NmbSemichart from './NmbSemichart'
import SitewisePDosing from './SitewisePDosing'

function dashboard4() {
  return (
    <>
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
    </>
  )
}

export default dashboard4