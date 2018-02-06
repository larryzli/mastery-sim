const axios = require("axios");

module.exports = {
    getAllPokemon: (req, res) => {
        axios
            .get("http://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return res.status(200).json(response.data);
            })
            .catch(console.log);
    },
    catchPokemon: (req, res) => {
        const db = req.app.get("db");
        const { name, url } = req.body;
        db
            .catch_pokemon([name, url])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    releasePokemon: (req, res) => {
        const db = req.app.get("db");
        const id = req.params.id;
        db
            .release_pokemon([id])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    getMyPokemon: (req, res) => {
        const db = req.app.get("db");
        db
            .get_my_pokemon([])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    },
    nicknamePokemon: (req, res) => {
        const db = req.app.get("db");
        const { id, nickname } = req.body;
        db
            .change_pokemon_nickname([id, nickname])
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(console.log);
    }
};
