import React, { Component } from 'react'
import Cp from './nmbprocesscapability/Cp'
import Cpk from './nmbprocesscapability/Cpk'
import Cp1 from './nmbprocesscapability/Cp1'
import Cpk1 from './nmbprocesscapability/Cpk1'
import Dapda from './nmbprocesscapability/DapdaPercentage'
import Pondicherry from './nmbprocesscapability/PondicherryPercentage'
import Chhindwara from './nmbprocesscapability/ChhindwaraPercentage'
import Haridwar from './nmbprocesscapability/HaridwarPercentage'
import Sumerpur from './nmbprocesscapability/SumerpurPercentage'
import { getToken,apiUrl } from "../config";
import axios from 'axios';


export class Dashboard6 extends Component {

    componentDidMount=async()=>{
        var token = await getToken();
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
       const formattedTodayDate = mm + '/' + dd + '/' + yyyy;
         let current = this;
         const passHeader = {
          Authorization: token,
          Accept: "application/json",
            "Content-Type": "application/json",
              };
            axios.get(`${apiUrl}/nmbapi/GetKPPKBP?date=${formattedTodayDate}` , {
              headers: passHeader,
              }).then((response) =>{
                
              }).catch((err)=>{
                 console.log("-----err")
                console.log(err)
              })

  }

  render() {
    return (
      <>
          <section className="dashobaard6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                            <div className="card-body">
                                <h4>NMB Process Capability</h4>
                                <h3>OVERALL NMB</h3>
                        </div>
                        </div>
                        </div>
                        
                    </div>

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
                                    <Pondicherry/>
                                </div>
                                <div className="col-md-3 px-2">
                                    <h3>Chhindwara</h3>
                                    <Chhindwara/>
                                </div>
                                <div className="col-md-3 px-2">
                                    <h3>Haridwar</h3>
                                    <Haridwar/>
                                </div>
                                <div className="col-md-3 px-2">
                                    <h3>Sumerpur</h3>
                                    <Sumerpur/>
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