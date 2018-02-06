import React from "react";
import { Switch, Route } from "react-router-dom";
import PokeList from "./components/PokeList";
import MyPokemon from "./components/MyPokemon";

export default (
    <Switch>
        <Route path="/me" component={MyPokemon} />
        <Route exact path="/" component={PokeList} />
    </Switch>
);
