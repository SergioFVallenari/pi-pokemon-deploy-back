const { Pokemon, Type } = require("../db")

const postPokemon = async (name, image, hp, attack, defense, speed, height, weight, types) => {
        if (types.length > 0 && types.length <= 2) {
            const [newPokemon, create] = await Pokemon.findOrCreate({
                where: { name: name, image: image },
                defaults: { name, image, hp, attack, defense, speed, height, weight }
            })
                // console.log('estos son los tipos', types);
            if (create) {
                const addTypes = await Type.findAll({
                    where: {
                         name: types
                    }
                })
                
                return await newPokemon.addType(addTypes);
            } else {
                throw new Error('The pokémon already exists')
            }
        }
        else {
            throw new Error('The new pokemon cannot have more than two types')
        }
}

module.exports = postPokemon