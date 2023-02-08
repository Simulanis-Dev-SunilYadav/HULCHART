import React from 'react'
import Doughnut from './charts/Doughnut'
import ColumnOEE from './charts/ColumnOEE'

function DolphinUniliver() {
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
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <div className='card-body doughnt'>
                                <Doughnut/>
                             </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ColumnOEE/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DolphinUniliver