import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchedCountry, searchedText,removesearchedText } from "../redux/action/countryAction";
import { withRouter, useHistory } from "react-router-dom";
function Search() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchInput, setSearchInput] = useState("");
    const [searchCountry, setSearchCountry] = useState([]);

    const url = `https://restcountries.com/v2/name/`;

    const searchInputHandler = e => {
        setSearchInput(e.target.value);
        console.log(searchInput);
        // dispatch(searchedText(searchInput))
        //    dispatch(searchedCountry(searchInput))
    };
    const submitHandler = async e => {
        e.preventDefault();
        dispatch(searchedText(searchInput));
        // fetch(url + searchInput)
        //     .then(res => res.json())
        //     .then(results => {
        //         dispatch(searchedCountry(results));
        //         history.push({
        //             pathname: `/results/${searchInput}`,
        //         });

        //         setSearchCountry(results);

        //         console.log(results);
        //     });

        const response = await fetch(url + searchInput);
        const results = await response.json();
        
       
        if(results.status >= 400) {
            console.log('error')
            history.push({
                pathname: `/noresults/${searchInput}`,
            });
           
        }
       else{
        
        dispatch(searchedCountry(results))
        history.push({
            pathname: `/results/${searchInput}`,
        });

        setSearchCountry(results);

        console.log(results);
       }
       
    };
    
    // dispatch(searchedCountry(results && <Redirect to={`/results/${searchInput} `} />))
    // {results.length && (
    //     <Redirect to={`/results/${searchInput} `}/>
    //   )};

    return (
        <div className="search_section helper_container">
            <div className="search">
                <i className="bx bx-search"></i>
                <form onSubmit={submitHandler} className="form-control">
                    <input
                        onChange={searchInputHandler}
                        className="text_search"
                        id="text_search"
                        type="text"
                        placeholder="Search for a country..."
                        value={searchInput}
                    />
                </form>
            </div>
            {/* <select name="select" id="select">
                <option className="filterR" value="Filter by region">
                    Filter by region
                </option>
                <option className="filterR" value="Africa">
                    Africa
                </option>
                <option className="filterR" value="America">
                    America
                </option>
                <option className="filterR" value="Asia">
                    Asia
                </option>
                <option className="filterR" value="Europe">
                    Europe
                </option>
                <option className="filterR" value="Ociana">
                    Ociana
                </option>
            </select> */}

            {/* <Redirect to={`/search/${setSearchInput}`} push /> */}
        </div>
    );
}

export default withRouter(Search);
