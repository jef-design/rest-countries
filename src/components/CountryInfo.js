import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    selectedCountry,
    removeselectedCountry,
} from "../redux/action/countryAction";
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

function CountryInfo() {
    const { name } = useParams();
    const setcountry = useSelector((state) => state.selectedcountry.country);
    console.log(setcountry);
    const dispatch = useDispatch();
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    const fetchCountryDetails = async () => {
        try {
            const response = await fetch(url);
            const count = await response.json();
            dispatch(selectedCountry(count));
           
        } catch (error) {
            console.log("ERROR", error);
        }
    };
    useEffect(() => {
        if (name && name !== "") fetchCountryDetails();
        // return () => {
        //     dispatch(removeselectedCountry());
        // };
    }, [url]);

    return (
        <section className="country_info_section helper_container">
            {Object.keys(setcountry).length === 0 ? (
                <SyncLoader loading size={20} />
            ) : (
                <React.Fragment>
                    <Link to="/">
                        <button className="btn_back">
                            <i className="bx bx-arrow-back"></i>
                            Back
                        </button>
                    </Link>
                    {setcountry.map((country, index) => {
                        const {
                            flag,
                            name,
                            region,
                            capital,
                            nativeName,
                            population,
                            subregion,
                            timezones,
                            currencies,
                            languages,
                            regionalBlocs,
                        } = country;
                        return (
                            <div key={index} className="country_info_desc">
                                <div className="flag">
                                    <img src={flag} alt={name} />
                                    <h3>{name}</h3>
                                    {regionalBlocs.map((c, i) => {
                                        return (
                                            <p key={i}>
                                                Regional Blocs: "{c.name}"
                                            </p>
                                        );
                                    })}
                                </div>
                                <div className="country_info">
                                    <p>Native name: "{nativeName}"</p>
                                    <p>Population: {population}</p>
                                    <p>Capital: {capital}</p>
                                    <p>Region: {region}</p>
                                    <p>Sub Region: {subregion}</p>
                                    <p>Timezone: {timezones}</p>
                                    {currencies.map((c, i) => {
                                        return (
                                            <p key={i}>
                                                Currencies: {c.code}, "{c.name}"
                                            </p>
                                        );
                                    })}
                                    {languages.slice(0, 1).map((c, i) => {
                                        return (
                                            <p key={i}>
                                                Languages: {c.name}, "
                                                {c.nativeName}"
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </React.Fragment>
                 )} 
        </section>
    );
}

export default CountryInfo;
