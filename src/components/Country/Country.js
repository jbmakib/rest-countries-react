import React from "react";
import "./Country.css";

const Country = (props) => {
    const { name, capital, population, flag, region } = props.country;

    return (
        <div className="country">
            <h3>This is: {name}</h3>
            <img src={flag} alt={name} />
            <br />
            <small>Region: {region}</small>
            <p>
                Capital is: <b>{capital}</b>. Population is: <b>{population}</b>
            </p>
        </div>
    );
};

export default Country;
