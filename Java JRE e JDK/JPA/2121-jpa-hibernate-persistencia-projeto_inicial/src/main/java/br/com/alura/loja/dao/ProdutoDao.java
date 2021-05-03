package br.com.alura.loja.dao;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.EntityManager;

import br.com.alura.loja.modelo.Produto;

public class ProdutoDao {
	
	private EntityManager eManager;

	
	public ProdutoDao(EntityManager eManager) {
	
		this.eManager = eManager;
	}
	
	public void cadastrar(Produto produto) {
		this.eManager.persist(produto);
	}
	
	public void atualizar(Produto produto) {
		this.eManager.merge(produto);
	}
	public void excluir(Produto produto) {
		Produto produtoMerge = this.eManager.merge(produto);
		this.eManager.remove(produtoMerge);
	}

	public List<Produto> buscarTodos(){
		
		String jpql = "select p from Produto p";
		
		return this.eManager.createQuery(jpql, Produto.class).getResultList();
	}
	
	public List<Produto> buscarPorNome(String nome){
		
		String jpql = "select p from Produto p where p.nome = :nome ";
		
		return this.eManager.createQuery(jpql, Produto.class)
				.setParameter("nome", nome)
				.getResultList();
	}
	
	public List<Produto> buscarPorNomeCategoria(String nome){
		
		String jpql = "select p from Produto p where p.categoria.nome = :nome ";
		
		return this.eManager.createQuery(jpql, Produto.class)
				.setParameter("nome", nome)
				.getResultList();
	}
	
	public BigDecimal buscarPrecoProdutoComNome(String nome){
		
		String jpql = "select p.preco from Produto p where p.nome = :nome ";
		
		return this.eManager.createQuery(jpql, BigDecimal.class)
				.setParameter("nome", nome)
				.getSingleResult();
	}
}
