const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
 
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


module.exports = app;



/**
 * Rota / Recurso
*/

/** 
  * Métodos HTTP
  *
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  * 
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: nomeados enviados na rota após a "?" (Filtros, paginação)
 * Route Params: utilizados para identificar recursos
 * Request Body: corpo da requisição, usado para criar ou alterar recursos
 * 
 */

/**
 * Banco de Dados
 * 
 * Tipos
 *  SQL: mySQL, SQLite, PostgreSQL, Oracle, MS-SQL
 *  NoSQL: MongoDB, CouchDB, etc
 * 
 * Conexão
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where('...')
 */
