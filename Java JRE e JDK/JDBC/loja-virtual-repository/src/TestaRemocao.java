import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TestaRemocao {

  public static void main(String[] args) throws SQLException{
    ConnectionFactory con = new ConnectionFactory();
    Connection connection = con.recuperaConexao();
    
    PreparedStatement stm = connection.prepareStatement("DELETE FROM PRODUTO WHERE ID > ?");
    stm.setInt(1, 2);
    stm.execute();

    //Retorna a quantidade de linhas modificadas pela query
    Integer linhasModificadas = stm.getUpdateCount();

    System.out.println("Quantidade de linhas modificadas: " + linhasModificadas );

  }
  
}
