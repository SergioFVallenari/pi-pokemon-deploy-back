const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemons = async () => {
    const limit = 10
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=00`)
    const listPokemons = data.results

    const detailPokemons = await Promise.all(listPokemons.map(async (pokemon) => {
        const { data } = await axios({url:pokemon.url, timeout:50000})
        const characterPokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other.home.front_default ? data.sprites.other.home.front_default : data.sprites.front_default ,
            hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
            attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
            defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
            speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type) => ({ name: type.type.name }))
        }
        return characterPokemon
    }))
    const pokemons = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: {
                exclude: ['id']
            },
            through: {
                attributes: []
            }
        }
    });
    
    const pokemonsCombined = [...detailPokemons, ...pokemons]
    return detailPokemons.concat(pokemons)

}

module.exports = getPokemons