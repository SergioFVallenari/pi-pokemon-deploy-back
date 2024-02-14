const getPokemons = require("../controllers/getPokemons")

const allPokemonsHandler = async (req, res) => {
    try {
        const allPokemons = await getPokemons()
        res.status(200).json(allPokemons)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = allPokemonsHandler