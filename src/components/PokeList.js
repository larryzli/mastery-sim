import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
// import './PokeList.css';

class PokeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: [],
            nextPage: "",
            previousPage: "",
            myPokemon: []
        };

        this.catchPokemon = this.catchPokemon.bind(this);
    }
    catchPokemon(name, url) {
        axios
            .post("/api/me/", {
                name: name,
                url: url
            })
            .then(response => {
                this.setState({
                    myPokemon: response.data
                });
            });
        alert(`${name} was caught!`);
    }
    getNextPage() {
        axios.get(this.state.nextPage).then(response => {
            this.setState({
                pokemonList: response.data.results,
                nextPage: response.data.next,
                previousPage: response.data.previous
            });
        });
    }
    getPreviousPage() {
        axios.get(this.state.previousPage).then(response => {
            this.setState({
                pokemonList: response.data.results,
                nextPage: response.data.next,
                previousPage: response.data.previous
            });
        });
    }
    componentDidMount() {
        axios.get("/api/pokemon/all").then(response => {
            this.setState({
                pokemonList: response.data.results,
                nextPage: response.data.next,
                previousPage: response.data.previous
            });
        });
        axios.get("/api/me").then(response => {
            this.setState({
                myPokemon: response.data
            });
        });
    }
    render() {
        const pokeList = this.state.pokemonList.map((pokemon, index) => {
            let caught = false;
            for (let i in this.state.myPokemon) {
                if (this.state.myPokemon[i].url === pokemon.url) {
                    caught = true;
                }
            }
            return (
                <Pokemon
                    key={index}
                    name={pokemon.name}
                    url={pokemon.url}
                    catch={this.catchPokemon}
                    caught={caught}
                />
            );
        });
        return (
            <div>
                <div>{pokeList}</div>
                <div>
                    {this.state.previousPage ? (
                        <button onClick={e => this.getPreviousPage()}>
                            PREVIOUS PAGE
                        </button>
                    ) : null}
                    {this.state.nextPage ? (
                        <button onClick={e => this.getNextPage()}>
                            NEXT PAGE
                        </button>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default PokeList;
