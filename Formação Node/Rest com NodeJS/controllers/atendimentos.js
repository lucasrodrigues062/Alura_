const Atendimento = require('../models/atendimentos')

module.exports = app => {
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res)
  })

  app.get('/atendimentos/:id', (req, res) => {

    const idAtendimento = parseInt(req.params.id)
    

    Atendimento.buscaPorId(idAtendimento, res)

  })

  app.put('/atendimentos/:id', (req, res) =>{
    const idAtendimento = parseInt(req.params.id)
    const atendimento = req.body
    
    Atendimento.atualiza(idAtendimento, res, atendimento)
  })


  app.post('/atendimentos', (req,res) => {
    
    const atendimento = req.body

    Atendimento.adiciona(atendimento, res)
    
    
  }
  )

  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
  })
}