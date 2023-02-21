import React from 'react'
import Analysis from './analysis'
import LineDotted from './dottedline'
import CLDByCustomer from './CLDByCustomer'
import CLDByBranch from './CLDByBranch'
import Dashboard1 from "../image/dashboard1.png"
function dashboard1() {
  return (
    <>
       {/* <section className="dashboard0"> */}
            {/* <div className="container">
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
            </div> */}


           <div>
              <img src={Dashboard1} style={{width: '100%'}} />
           </div>


            {/* <iframe title="PBI Quality" style={{width: '100%', height: '100vh'}} src="https://app.powerbi.com/reportEmbed?reportId=8b457fd5-6ae8-4f9a-b22d-9401fa2b982a&autoAuth=true&ctid=f66fae02-5d36-495b-bfe0-78a6ff9f8e6e" frameborder="0" allowFullScreen="true"></iframe> */}
        {/* </section> */}
       



    </>
  )
}

export default dashboard1