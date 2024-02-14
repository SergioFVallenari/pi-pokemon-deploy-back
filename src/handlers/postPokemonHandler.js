const postPokemon = require("../controllers/postPokemons")

const postPokemonHandler = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body
         if (!name || !image || !hp || !attack || !defense) {
            throw new Error('Faltan datos')
        }
        else{
            const lowerName = name.toLowerCase()
            const newPokemon = await postPokemon(lowerName, image, hp, attack, defense, speed, height, weight, types)
            if (newPokemon) {
                res.status(200).json({message: 'Pokémon created successfully'})
            }
        }
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = postPokemonHandler