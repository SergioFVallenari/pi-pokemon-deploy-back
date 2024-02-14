const getPokemonsById = require("../controllers/getPokemonsById");

const idPokemonHandler = async (req, res) =>{
    try {
        const { id } = req.params;
        const idPokemon = await getPokemonsById(id)

        if (idPokemon) {
            res.status(200).json(idPokemon)
        }
        
    } catch (error) {
        res.status(400).send("No hay pokemon con ese id")
    }
}

module.exports = idPokemonHandler