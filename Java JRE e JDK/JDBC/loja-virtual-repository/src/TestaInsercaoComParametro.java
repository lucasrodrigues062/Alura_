import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaInsercaoComParametro {
  public static void main(String[] args) throws SQLException{
    String nome = "Cebola";
    String descricao = "Cebola Branca";

    ConnectionFactory connectionFactory = new ConnectionFactory();
    Connection connection = connectionFactory.recuperaConexao();
    //Definindo a query
    PreparedStatement stm = connection.prepareStatement("INSERT INTO PRODUTO (NOME, DESCRICAO) VALUES (?,?)", Statement.RETURN_GENERATED_KEYS);
    // Definindo os valores dos atributos
    stm.setString(1, nome);
    stm.setString(2, descricao);
    //Executando a query
    stm.execute();
    // Capturando o Id Gerado no Insert
    ResultSet rst = stm.getGeneratedKeys();
  
    while(rst.next()){
      Integer id = rst.getInt(1);
      System.out.println("o id criado foi: " + id);
    }
  }


}


