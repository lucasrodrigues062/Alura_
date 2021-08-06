const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {

  adiciona(atendimento, response) {
    
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const dataAtendimento = moment(atendimento.dataAtendimento, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss')

    const dataIsValid = moment(dataAtendimento ).isSameOrAfter(dataCriacao)
    const clienteIsValid = atendimento.cliente.length >=5
    
    const validacoes = [
      {
        field: 'data',
        valid: dataIsValid,
        message: 'date and time must be greather or equal, the actual date and time'
      },
      {
        field: 'cliente',
        valid: clienteIsValid,
        message: 'size must be at least 5 characters'
      }
    ]

    const errors = validacoes.filter(error => !error.valid)
    

    if( errors.length > 0){
      response.status(400).json(errors)
    }
    else {
      const sql = 'INSERT INTO Atendimentos (cliente, pet, servico, status, observacoes, dataAtendimento, dataCriacao) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
    const values = [atendimento.cliente, atendimento.pet, atendimento.servico, atendimento.status, atendimento.observacoes, dataAtendimento, dataCriacao]
    conexao.query(sql, values, (error, result) => {

      if (error) {
        response.status(400).json(error.message)
      } else {
        response.status(201).json(result.rows[0])
      }

      
    })  
    }

    

 }

 lista(response) {

  const sql = `SELECT * FROM ATENDIMENTOS`

  conexao.query(sql, (error, result) => {
    if (error){
      response.status(400).json(error.message)
    }
    if (result.rowCount == 0){
      response.status(404).json()
    } else {
      response.status(200).json(result.rows)
    }

  })

 }

 buscaPorId(id, response){
   const sql = `SELECT * FROM ATENDIMENTOS WHERE ID = $1`
   const values = [id]
   conexao.query(sql, values, (error, result) => {
    if (error){
      response.status(400).json(error.message)
    }
    if (result.rowCount == 0){
      response.status(404).json()
    } else {
      response.status(200).json(result.rows[0])
    }
   })
 }

 async atualiza(id, response, atendimento){
  const sql = `SELECT * FROM ATENDIMENTOS WHERE ID = $1`
  const consulta = await conexao.query(sql, [id])
  .catch(error => response.status(400).json(error.message))
  
  if(consulta.rowCount == 0){
    response.status(404).json()
  } else {
    const atendimentoAntigo = consulta.rows[0]
    
      const novoAtendimento = {
        cliente: atendimento.cliente !== undefined && atendimento.cliente !== null ? atendimento.cliente : atendimentoAntigo.cliente,
        pet: atendimento.pet !== undefined && atendimento.pet !== null ? atendimento.pet : atendimentoAntigo.pet,
        servico: atendimento.servico !== undefined && atendimento.servico !== null ? atendimento.servico : atendimentoAntigo.servico,
        status: atendimento.status !== undefined && atendimento.status !== null ? atendimento.status : atendimentoAntigo.status,
        observacoes: atendimento.observacoes !== undefined && atendimento.observacoes !== null ? atendimento.observacoes : atendimentoAntigo.observacoes,
        dataAtendimento: atendimento.dataAtendimento !== undefined && atendimento.dataAtendimento !== null ?  moment(atendimento.dataAtendimento, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss') : atendimentoAntigo.dataatendimento
      }
     
    const sqlUpdate = `UPDATE ATENDIMENTOS SET cliente = $1, pet = $2, servico = $3, status = $4, observacoes = $5, dataAtendimento = $6 where id = $7 RETURNING *`  
    const values = [novoAtendimento.cliente, novoAtendimento.pet, novoAtendimento.servico, novoAtendimento.status,novoAtendimento.observacoes, novoAtendimento.dataAtendimento, id]
    conexao.query(sqlUpdate, values)
    .then(result => response.status(200).json(result.rows[0]))
    .catch(error => response.status(400).json(error.message))
      
  }
  

  

  

 }
 
 deleta(id, response){
   const sql = `DELETE FROM ATENDIMENTOS WHERE ID = $1 RETURNING *`
   conexao.query(sql, [id])
   .then(result => result.rows.length == 0 ? response.status(404).json() : response.status(200).json(result.rows[0]))
   .catch(error => response.status(400).json(error.message))
 }
}

module.exports = new Atendimento