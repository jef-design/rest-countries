import React from "react";
import { Link } from "react-router-dom";

function CountryCard({numericCode, name, population, region, capital, flag}) {
    return (
        <>
        <Link to={`/countryinfo/${name}`}>
        <div key={numericCode} className="country">
            
               <div className="country_flag">
               <img src={flag} alt={name} />
               </div>
            
            <div className="country_desc">
                <h3 className="country-name">{name}</h3>
                <p>{population}</p>
                <p className="country-region">{region}</p>
                <p>{capital}</p>
            </div>
           
        </div>
        </Link>
        </>
    );
}

export default CountryCard;
