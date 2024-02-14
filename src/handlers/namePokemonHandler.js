const getPokemonsQuery = require("../controllers/getPokemonsQuery")

const namePokemonHandler = async (req, res) =>{
    try {
        const { name } = req.query
        const nameLower = name.toLowerCase().trim()//dejar el trim() para mostrar un bug y solucionarlo
        const pokemonName = await getPokemonsQuery(nameLower)

        if (pokemonName) {
            return res.status(200).json(pokemonName)
        }
        else{
            throw new Error('Pokemon not found')
        }
        
    } 
    catch (error) {
     return res.status(400).send(error.message)   
    }
}

module.exports = namePokemonHandler