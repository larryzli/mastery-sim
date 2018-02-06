import React, { Component } from "react";
import axios from "axios";
import OwnedPokemon from "./OwnedPokemon";
// import './MyPokemon.css';

class MyPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPokemon: []
        };
        this.releasePokemon = this.releasePokemon.bind(this);
    }
    releasePokemon(id, name) {
        axios.delete(`/api/me/${id}`).then(response => {
            this.setState({ myPokemon: response.data });
        });
        alert(`${name} was released :(`);
    }
    nicknameHandler(event, id) {}
    componentDidMount() {
        axios.get("/api/me").then(response => {
            this.setState({
                myPokemon: response.data
            });
        });
    }
    render() {
        const myPokemon = this.state.myPokemon.map((pokemon, index) => {
            return (
                <OwnedPokemon
                    key={index}
                    pokemon={pokemon}
                    release={this.releasePokemon}
                />
            );
        });
        return <div>{myPokemon}</div>;
    }
}

export default MyPokemon;
