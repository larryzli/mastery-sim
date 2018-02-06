import React from "react";

const OwnedPokemon = ({ pokemon, release }) => {
    return (
        <div>
            {pokemon.nickname || pokemon.name}{" "}
            <button
                onClick={e =>
                    release(pokemon.id, pokemon.nickname || pokemon.name)
                }
            >
                RELEASE
            </button>
            <br />
            <form action="">
                <input type="text" placeholder="Nickname..." />
                <input type="submit" value="NICKNAME" />
            </form>
            <br />
        </div>
    );
};
export default OwnedPokemon;
