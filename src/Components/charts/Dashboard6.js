import React, { Component } from 'react'
import Cp from './nmbprocesscapability/Cp'
import Cpk from './nmbprocesscapability/Cpk'
import Cp1 from './nmbprocesscapability/Cp1'
import Cpk1 from './nmbprocesscapability/Cpk1'
import Dapda from './nmbprocesscapability/Dapda'

export class Dashboard6 extends Component {
  render() {
    return (
      <>
          <section className="dashobaard6">
              <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2>Key Process Parameter (KPP)</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className='text-center'>CP</h3>
                                        <Cp/>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className='text-center'>CPK</h3>
                                        <Cpk/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2>Key Batch Parameter (KBP)</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className='text-center'>Cp</h3>
                                        <Cp1/>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className='text-center'>Cpk</h3>
                                        <Cpk1/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2">
                        <div className="card">
                            <div className="card-body" style={{height:'300px', marginTop:'45px'}}>
                                <p>Process Capability(Health %)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row customcolumn">
                            <div className="col-md-3 px-2">
                                 <h3>Dapda</h3>
                                 <Dapda/>
                            </div>
                            <div className="col-md-3 px-2">
                                 <h3>Pondicherry</h3>
                                 <Dapda/>
                            </div>
                            <div className="col-md-3 px-2">
                                 <h3>Chhindwara</h3>
                                 <Dapda/>
                            </div>
                            <div className="col-md-3 px-2">
                                 <h3>Haridwar</h3>
                                 <Dapda/>
                            </div>
                            <div className="col-md-3 px-2">
                                 <h3>Sumerpur</h3>
                                 <Dapda/>
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

export default Dashboard6