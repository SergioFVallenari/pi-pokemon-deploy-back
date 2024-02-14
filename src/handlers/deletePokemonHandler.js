const deletePokemon = require("../controllers/deletePokemon")


const deletePokemonHandler = async(req, res) =>{
    try {
        const {id} = req.params
      const response = await deletePokemon(id)
       res.status(200).send(response)
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = deletePokemonHandler