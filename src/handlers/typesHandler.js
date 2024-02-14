const getType = require("../controllers/getTypes")

const typesHandler = async (req, res) => {

    try {
        const findTypes = await getType()
        if (findTypes) {
            res.status(200).json(findTypes)
        }
    } 
    catch (error) {
        res.status(400).send('Error en la solicitud')
    }




}

module.exports = typesHandler