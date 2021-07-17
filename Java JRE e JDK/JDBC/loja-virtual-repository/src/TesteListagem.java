import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TesteListagem {
  		
	public static void main(String[] args) throws SQLException {
	
    ConnectionFactory criaConexao = new ConnectionFactory();
    Connection connection = criaConexao.recuperaConexao();

    PreparedStatement stm = connection.prepareStatement("Select id, nome, descricao from produto");
    stm.execute();
    
    ResultSet rst = stm.getResultSet();

    while(rst.next()){
      Integer id = rst.getInt("ID");
      System.out.println(id);
      String nome = rst.getString("nome");
      System.out.println(nome);
      String descricao = rst.getString("descricao");
      System.out.println(descricao);
    }
    //System.out.println(resultado);

      System.out.println("fechando a conexao");
		
      connection.close();
	}
}
