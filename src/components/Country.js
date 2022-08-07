import React, { useEffect,useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "../redux/action/countryAction";
import CountryCard from "./CountryCard";


function Country() {
    const url = "https://restcountries.com/v2/all";
    const setcountries = useSelector(state => state.allcountry.fetchcountries);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(url);
            const countries = await response.json();

            dispatch(setCountry(countries));
        };
        fetchCountryData();
    }, [url,dispatch]);

    return (
        <section  className="country_container helper_container">
            <div className="country__label">
                <p>Country</p>
                <p>Population</p>
                <p>Region</p>
                <p>Capital</p>
            </div>
            {setcountries.map((c,index) => {
                const { numericCode, name, population, region, capital, flag } =
                    c;

                return (
                    <CountryCard
                         key={index}
                        numericCode={numericCode}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                        flag={flag}
                    />
                );
            })}
        </section>
    );
}

export default Country;
