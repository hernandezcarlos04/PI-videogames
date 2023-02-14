
const getVideogames = (req, res) => {
    res.send("NIY: Estoy procesando getVideogames");
}

const getVideogamesId = (req, res) => {
    const { id } = req.params;
    res.send(`Va a enviar el detalle del usuario del ID ${ id }`)
}

module.exports = { 
    getVideogames,
    getVideogamesId
};