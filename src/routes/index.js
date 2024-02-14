const { Router } = require('express');
const routerPokemon = require('../routes/pokemonsRoute')
const routerTypes = require('../routes/typesRoute')

const namePokemonHandler = require('../handlers/namePokemonHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', routerPokemon)
router.get('/pokemon', namePokemonHandler)
router.use('/types', routerTypes)

router.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación de Pokémon!');
  });

module.exports = router;
