
class Tabelas {
  init(conexao) {

    this.conexao = conexao
    this.criaAtendimentos()
  }


  criaAtendimentos() {
    const sql =
      `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL generated always as IDENTITY
      , cliente varchar(255) NOT NULL, pet varchar(255), servico varchar(255) NOT NULL,  
      status varchar(255) NOT NULL, observacoes text, dataAtendimento timestamp not null,
      dataCriacao timestamp not null, PRIMARY KEY(id))`

    this.conexao.query(sql, (error, result) => {
      if (error) {
        console.log(error.stack)

      } else {
        console.log(result.rows[0])
      }
    })
  }

}

module.exports = new Tabelas