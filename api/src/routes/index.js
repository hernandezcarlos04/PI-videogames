const { Router } = require('express');
// Importar todos los routers;
const videogamesRouter = require("./videogamesRouter")
const videogamesPosts = require("./postsRouter");
const genresRouter = require("./genresRouter");

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames" , videogamesRouter);

router.use("/videogames" , videogamesPosts );

router.use("/genres", genresRouter);



module.exports = router;
