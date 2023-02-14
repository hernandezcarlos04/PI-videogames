const {Router} = require("express");
const postVideogames = require("../handlers/postVideogames")

const videogamesPosts = Router();

videogamesPosts.post("/", postVideogames);

module.exports = videogamesPosts;