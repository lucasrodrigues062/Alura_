package br.com.alura.loja.dao;

import javax.persistence.EntityManager;

import br.com.alura.loja.modelo.Categoria;
import br.com.alura.loja.modelo.Produto;

public class CategoriaDao {
	
	private EntityManager eManager;

	
	public CategoriaDao(EntityManager eManager) {
	
		this.eManager = eManager;
	}
	
	public void cadastrar(Categoria categoria) {
		this.eManager.persist(categoria);
	}

	public void atualizar(Categoria categoria) {
		this.eManager.merge(categoria);
	}
	public void excluir(Categoria categoria) {
		Categoria categoriaMerge = this.eManager.merge(categoria);
		this.eManager.remove(categoriaMerge);
	}

}
