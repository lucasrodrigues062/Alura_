package br.com.alura.loja.testes;

import java.math.BigDecimal;

import javax.persistence.EntityManager;

import br.com.alura.loja.dao.CategoriaDao;
import br.com.alura.loja.dao.ProdutoDao;
import br.com.alura.loja.modelo.Categoria;
import br.com.alura.loja.modelo.Produto;
import br.com.alura.loja.util.JPAUtil;

public class CadastroDeProduto {

	public static void main(String[] args) {
		
		cadastrarProduto();
	}

	
	
	private static void cadastrarProduto() {
		Categoria categoria = new Categoria("Celulares");
		Produto celular = new Produto("Celular A90", "BlackView",new BigDecimal("800"), categoria);

				
		EntityManager eManager = JPAUtil.getEntityManager();
		
		ProdutoDao produtoDao = new ProdutoDao(eManager);
		CategoriaDao categoriaDao = new CategoriaDao(eManager);
		
		eManager.getTransaction().begin();
		categoriaDao.cadastrar(categoria);
		produtoDao.cadastrar(celular);
		eManager.getTransaction().commit();
		eManager.close();
	}

}
