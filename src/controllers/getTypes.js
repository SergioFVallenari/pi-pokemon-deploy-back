const axios = require('axios')
const {Type} = require('../db')

const getType = async() =>{
    
        
        const dbTypes = await Type.findAll()

        if (dbTypes.length === 0) {
            const url = 'https://pokeapi.co/api/v2/type'
            const {data} = await axios(url)
    
            const listTypes = data.results.map((type)=>{
                return {name: type.name}
            })
            await Type.bulkCreate(listTypes)


            const dbTypesActualized = await Type.findAll()
        return dbTypesActualized
        }
        const dbView = dbTypes.map((name)=>{
            return name.name
        })
        return dbView

}

module.exports = getType