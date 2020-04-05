import React, { useState, useEffect } from 'react'
import moment from 'moment'

import Persons from '../../osobe.json'


const Home = ({ search, history }) => {
    const [persons, setPersons] = useState(Persons)

    useEffect(() => {
        console.log("effect ", search)
        if (search) {
            var filterPersons = Persons.filter(osoba =>
                osoba.name.toLowerCase().includes(search.toLowerCase()) ||
                osoba.last_name.toLowerCase().includes(search.toLowerCase()) ||
                osoba.JMBG.includes(search)

            )
            setPersons(filterPersons)
            return
        } else {
            setPersons(Persons)
        }

    }, [search])

    const showData = (e) => {
        if (window.innerWidth < 600) {
            var data = {}
            Object.values(e.currentTarget.children).map((item, index) => {
                data[index] = item.innerText
            })
            //  console.log("e target ", e.currentTarget.children)
            history.location.state = data
            history.push({
                pathname: '/detalji',
                state: data
            })

        }
        //   console.log(e.currentTarget.children)
    }
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" className="table-title">Ime</th>
                    <th scope="col" className="table-title">Prezime</th>
                    <th scope="col" className="table-title">JMBG</th>
                    <th scope="col" className="d-none-md">Adresa</th>
                    <th scope="col" className="d-none-md">Kanton</th>
                    <th scope="col" className="d-none-md">Opština</th>
                    <th scope="col" className="d-none-md">Datum rodjenja</th>
                    <th scope="col" className="d-none-sm">Početak izolacije</th>
                    <th scope="col" className="d-none-sm">Kraj izolacije</th>
                    <th scope="col" className="d-none-md">Kontakt</th>
                    <th scope="col" className="table-td table-title">test</th>
                </tr>
            </thead>
            <tbody>
                {persons.map(osoba => {
                    return (
                        <tr key={osoba._id} onClick={showData}>
                            <td>{osoba.name}</td>
                            <td>{osoba.last_name}</td>
                            <td>{osoba.JMBG}</td>
                            <td className="d-none-md"> {osoba.address}</td>
                            <td className="d-none-md">{osoba.opstina}</td>
                            <td className="d-none-md">{osoba.kanton}</td>
                            <td className="d-none-md">{moment(osoba.datum_rodenja).format('DD-MM-YYYY')}</td>
                            <td className="d-none-sm">{moment(osoba.pocetak_izolacije).format('DD-MM-YYYY')}</td>
                            <td className="d-none-sm">{moment(osoba.kraj_izolacije).format("DD-MM-YYYY")}</td>
                            <td className="d-none-md">{osoba.kontakt}</td>
                            <td className="table-td">+</td>
                        </tr>

                    )
                })}
            </tbody>
        </table >
    )
}

export default Home;