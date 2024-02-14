const { Router } = require("express");
const typesHandler = require("../handlers/typesHandler");

const route = Router()

route.get('/', typesHandler)

module.exports = route