import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    // search by input field
    function changeApi() {
        const name = document.getElementById("input-field").value;
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }
    return (
        <div className="container">
            <div className="input-group my-3">
                <input
                    type="text"
                    id="input-field"
                    className="form-control"
                    placeholder="Search By Product Name"
                />

                <button
                    className="btn btn-outline-dark"
                    id="search-btn"
                    onClick={changeApi}
                >
                    Search
                </button>
            </div>
            <h1>Countries Found: {countries.length}</h1>
            <div className="countries">
                {countries.map((country) => (
                    <Country
                        country={country}
                        key={country.alpha3Code}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
