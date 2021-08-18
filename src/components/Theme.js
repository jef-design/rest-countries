import React,{useContext,useState} from "react";
import {Link} from 'react-router-dom'


function Theme() {

    return (
        <div>
            <section className="top_bar helper_container">
            <Link to="/">
                <div className="logo">
                    <h1 style={{ color: "#222831" }}>
                        Country<span style={{ color: "#7971ea" }}>Inf</span>
                    </h1>
                    <i style={{ color: "#7971ea" }} className='bx bx-globe' ></i>
                   
                </div>
                </Link>
                <div className="theme_switcher">
                    {/* <i className="bx bxs-moon"></i> */}
                </div>
            </section>
        </div>
    );
}

export default Theme;
