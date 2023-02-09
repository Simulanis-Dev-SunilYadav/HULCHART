import React from 'react'
import Analysis from './analysis'
import LineDotted from './dottedline'
import CLDByCustomer from './CLDByCustomer'
import CLDByBranch from './CLDByBranch'

function dashboard1() {
  return (
    <>
       <section className="dashboard0">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <Analysis />
                    </div>

                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <LineDotted />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <CLDByCustomer/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <CLDByBranch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    </>
  )
}

export default dashboard1