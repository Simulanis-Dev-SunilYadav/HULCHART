import React, { Component } from 'react'
import DosingAccuracyP from './SCLFdosingaccuracy/DosingAccuracyP'
import RmTargetVactual from './SCLFdosingaccuracy/RmTargetVactual'

export class Dashboard7 extends Component {
  render() {
    return (
      <>
         <section className="dashboard7">
             <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body" style={{height:'375px'}}>
                                <h3 className='mt-2 mb-5'>Dosing Accuracy %</h3>
                                <DosingAccuracyP/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <h3>RM Target Vs Actual </h3>
                                <RmTargetVactual/>
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

export default Dashboard7
