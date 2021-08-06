const customExpress = require('./config/configExpress')

const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
  if(erro){
    console.log(erro)
  } else {
    console.log('conectado com sucesso')
    
    Tabelas.init(conexao)

    const app = customExpress()

    app.listen(3000, () => console.log('Olá mundo'))
  }

})
