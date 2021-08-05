import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center">
                        <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table tabele-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>{currElem.state}</th>
                                            <td>{currElem.confirmed}</td>
                                            <td>{currElem.recovered}</td>
                                            <td>{currElem.deaths}</td>
                                            <td>{currElem.active}</td>
                                            <td>{currElem.lastupdatedtime}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise;