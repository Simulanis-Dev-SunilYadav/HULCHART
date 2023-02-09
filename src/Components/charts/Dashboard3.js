import React from 'react'
import Doughnut from './Doughnut'
import ColumnOEE from './ColumnOEE'

function dashboard3() {
  return (
    <>
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

                <div className="row mt-4">
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
    </>
  )
}

export default dashboard3