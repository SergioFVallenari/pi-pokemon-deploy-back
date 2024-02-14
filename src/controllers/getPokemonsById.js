const axios = require("axios")
const { Pokemon, Type } = require('../db')

const getPokemonsById = async (id) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  if (isNaN(id)) {
    return await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: {
          exclude: ["id"]
        },
        through: {
          attributes: []
        }
      }
    })
  }
  else{
    const { data } = await axios(url);

    const pokemonById = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.other.home.front_default,
      hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
      attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
      defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
      speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types.map((type) => ({ name: type.type.name }))
    };
      return pokemonById
  } 
  
}

module.exports = getPokemonsById