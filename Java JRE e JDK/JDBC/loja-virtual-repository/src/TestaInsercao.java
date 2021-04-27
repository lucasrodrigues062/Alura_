import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.cj.xdevapi.Result;

public class TestaInsercao {

  public static void main(String[] args) throws SQLException {
    
    ConnectionFactory connectionFactory = new ConnectionFactory();
    Connection connection = connectionFactory.recuperaConexao();

    Statement stm = connection.createStatement();
    
    stm.execute("INSERT INTO PRODUTO (NOME, DESCRICAO) VALUES ('MOUSE','MOUSE SEM FIO')"
      , Statement.RETURN_GENERATED_KEYS);

    ResultSet rst = stm.getGeneratedKeys();

    while(rst.next()){
      Integer id = rst.getInt(1);
      System.out.println("o id criado foi: " + id);
    }

  }
  
}
