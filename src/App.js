import React,{useState} from "react";
import "./sass/App.css";
import Theme from "./components/Theme";
import CountryInfo from "./components/CountryInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import Home from "./components/Pages/Home";
import Search from "./components/Search";
import NoResults from "./Error/NoResults";

function App() {
    return (
            <Router>
                <div className="App">
                    <Theme />
                    <Search />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/results/" component={SearchContainer} />
                        <Route
                            path="/countryinfo/:name"
                            component={CountryInfo}
                        />
                        <Route path="/noresults/" component={NoResults} />
                    </Switch>
                </div>
            </Router>
    );
}

export default App;
