import React, { useState } from 'react'
import Navigation from '../../container/layout/Navigation';


import Table from '../../container/tables/Home';
export const Home = ({ history }) => {

    const [search, setSearch] = useState()
    const handleChange = (e) => {
        if (e.target.value.length > 3) {
            setSearch(e.target.value)
            return
            //
        }
        setSearch()
    }


    return (
        <div className="container-fluid">
            <Navigation />
            <div className="form-row d-flex justify-content-center">
                <div className="col-lg-3 col-sm-1">

                </div>
                <div className="col-lg-3 col-sm-10 ">
                    <label htmlFor="usr">Pretraga</label>
                    <input type="text" className="form-control" id="usr" onChange={handleChange} />
                </div>
                <div className="col-lg-3 col-sm-1">

                </div>
            </div>
            <div className="container-fluid mt-5">
                <Table
                    search={search}
                    history={history}
                />
            </div>
        </div >
    )
}

export default Home