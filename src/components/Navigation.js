import React from "react";
import { Link } from "react-router-dom";
// import "./Navigation.css";

const Navigation = props => {
    return (
        <header className="App-header">
            <h1 className="App-title">My Pokedex</h1>
            <div className="Navigation-links">
                <Link to="/">Pokemon List</Link>
                <br />
                <br />
                <Link to="/me">My Pokemon</Link>
            </div>
        </header>
    );
};

export default Navigation;
