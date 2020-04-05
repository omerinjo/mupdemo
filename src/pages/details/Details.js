import React from 'react'

const Details = ({ history }) => {
    console.log("detalji history", history)
    var data = history.location.state
    return (
        <div className="container">
            <div className="row">
                <h1>Podatci</h1>
            </div>
            <div className="container columnd-flex  flex-column align-items-center">
                <hr />
                <i className="fa fa-address-card mr-2"></i>
                <p>Ime: {data[0]}</p>
                <p> Prezime: {data[1]}</p>
                <p>JMBG: {data[2]}</p>
                <hr />
                <i className="fa fa-map mr-2"></i>
                <p>Adresa: {data[3]}</p>
                <p>Opština: {data[4]}</p>
                <p>Kanton: {data[5]}</p>
                <hr />
                <i className="fa fa-calendar"></i>
                <p>Datum rodzenja: {data[6]}</p>
                <p>Početak karantina: {data[7]}</p>
                <p>Kraj karantina: {data[8]}</p>
                <hr />
                <i className="fa fa-phone"></i>
                <p>kontakt: {data[9]}</p>
            </div>
            <button
                className="btn btn-success"
                onClick={() => history.push('/')} >Nazad</button>
        </div>
    )
}


export default Details