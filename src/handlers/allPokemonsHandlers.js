const getPokemons = require("../controllers/getPokemons")

const allPokemonsHandler = async (req, res) => {
    try {
        const allPokemons = await getPokemons()
        res.status(200).json(allPokemons)
        return;
    } catch (error) {
        console.error("Error al obtener todos los Pokémon:", error);
        res.status(500).send("Error al obtener todos los Pokémon. Por favor, inténtalo de nuevo más tarde.");
    }
}

module.exports = allPokemonsHandler