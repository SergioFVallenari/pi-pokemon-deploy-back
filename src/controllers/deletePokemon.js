const { Pokemon } = require('../db')

const deletePokemon = async(id) =>{
    const pokemonEliminated =  await Pokemon.destroy({
        where: {
            id: id
        }
    })
    if (pokemonEliminated < 0) {
        return 'Pokemon eliminado'
    }
    else{
        return 'No se encontro al pokemon'
    }
}

module.exports = deletePokemon