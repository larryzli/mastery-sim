const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const pokeCtrl = require("./controllers/pokeCtrl");

require("dotenv").config();

const app = express();
express.static(`${__dirname}/../build`);
massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    })
    .catch(console.log);

app.use(cors());
app.use(json());

app.get("/api/pokemon/all", pokeCtrl.getAllPokemon);

app.get("/api/me/", pokeCtrl.getMyPokemon);
app.post("/api/me/", pokeCtrl.catchPokemon);
app.delete("/api/me/:id", pokeCtrl.releasePokemon);
app.put("/api/me/:id", pokeCtrl.nicknamePokemon);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
