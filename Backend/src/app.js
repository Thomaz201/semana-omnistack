const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const app = express();

app.use(cors(/**Aqui dentro, dentro de {} colocamos qual origem em link http tem permissão para acessar o app */));
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;

/**
 * Rotas(url ou link)/Recursos(tabelas dentro do BD)
 */

/**
 * Métodos HTTP:
 * 
 * GET: Utilizamos para buscar/listar uma informação do back-end. É o "enter" que você dá quando entra em uma página web
 * POST: Utilizamos sempre para cirar uma informação no back-end.
 * PUT: Utilizamos para alterar um informação no back-end.
 * DELETE: Utilizamos para deletar uma informação no back-end.
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: São parâmetros nomeados enviados na rota após "?" (Filtros, paginação, buscas) 
 * Route Params: São parâmetros utilizados para identificar recursos (são mais específicos)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: Postgree, MySQL, Oracle, Microsoft SQL Server, SQLite
  * NoSQL: MongoDB, CassandraDB, CouchDB, etc
  */

/**
 * A Comunicação com o BD pode se dar de 3 formas:
 * Drive: Instala-se todos os drivers do DB, utiliza sintaxe SQL
 * Query Builder: Faz as buscas com JavaScript: tabel('users').select('*').where('')
 *  
 */



