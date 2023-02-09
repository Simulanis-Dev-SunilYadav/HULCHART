import React from 'react'
import Analysis from './analysis'
import LineDotted from './dottedline'

function dashboard1() {
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
       
    </>
  )
}

export default dashboard1