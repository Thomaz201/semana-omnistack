const express = require('express');
const routes = express.Router();

const OngControllers = require('./controllers/OngControllers');
const IncidentControllers = require('./Controllers/IncidentControllers');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const { celebrate, Segments, Joi } = require('celebrate');

/**
 * Importamos o pacote crypto para criarmos o ID das ongs. 
 * Utilizamos o método randomBytes() e toString(Hexadecimal) para criarmos uma string aleatória que será usada como ID.
 */

/**
 * Agora vamos desacoplar o sistema de Rotas do Express
 */

routes.get('/ongs', OngControllers.index);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngControllers.create);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}),IncidentControllers.index);

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    desciption: Joi.string().required(),
    value: Joi.number().required(),
  }),
}), IncidentControllers.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentControllers.delete);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.post('/session', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), SessionController.create);

module.exports = routes;