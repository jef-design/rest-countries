import React from 'react';
import {useSelector} from 'react-redux';
import CountryCard from './CountryCard';

function SearchContainer({searchInput}) {
    console.log(searchInput)
   
    const searchcountries = useSelector(state => state.allcountry.searchedcountry);
    const searchtext = useSelector(state => state.allcountry.text);
    console.log(searchcountries)
    return (
        <>
            
            <section className="country_container helper_container">
            <h1 className="search_results helper_container" >Search Results for "{searchtext}"</h1>
                {searchcountries.map(country => {
                const { numericCode, name, population, region, capital, flag } =
                    country;

                return (
                    <CountryCard
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
        </>
    )
}

export default SearchContainer
