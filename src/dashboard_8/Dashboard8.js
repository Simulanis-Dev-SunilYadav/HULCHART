import React, { Component } from 'react'
import NMBega from './SCLFexcessgiveaway/NMBega'
import SitewisepEGA from './SCLFexcessgiveaway/SitewisepEGA'

export class Dashboard8 extends Component {
  render() {
    return (
      <>
         <section className="dashboard8">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body" style={{height:'350px', marginTop:'50px'}}>
                                <h3>NMB EGA %</h3>
                                <NMBega/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <SitewisepEGA/>
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

export default Dashboard8
