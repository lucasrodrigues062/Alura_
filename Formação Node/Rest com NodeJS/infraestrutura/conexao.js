const pg = require('pg')

const conexao = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nodejs',
  password: 'postgres',
  port: 5432
})


module.exports = conexao