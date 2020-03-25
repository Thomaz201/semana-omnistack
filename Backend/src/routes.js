const express = require('express');
const routes = express.Router();

const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./Controllers/IncidentControllers');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

/**
 * Importamos o pacote crypto para criarmos o ID das ongs. 
 * Utilizamos o método ranfomBytes() e toString(Hexadecimal) para criarmos uma string aleatória que será usada como ID.
 */

/**
 * Agora vamos desacoplar o sistema de Rotas do Express
 */

routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create);

routes.get('/incidents', IncidentControllers.index);
routes.post('/incidents', IncidentControllers.create);
routes.delete('/incidents/:id', IncidentControllers.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;