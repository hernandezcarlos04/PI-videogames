const {Router} = require("express");
const  {getVideogames, getVideogamesId } = require("../handlers/getVideogame")

const videogamesRouter = Router();


videogamesRouter.get("/", getVideogames  );
  
videogamesRouter.get("/:idVideogame", getVideogamesId  );
  
 
module.exports = videogamesRouter;