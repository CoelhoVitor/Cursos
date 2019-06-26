package br.com.caelum.jdbc.model;

import java.util.ArrayList;
import java.util.List;

public class Categoria {
	
	private Integer id;
	private String nome;
	private final List<Produto> produtos = new ArrayList<>();
	
	public Categoria (int id, String nome) {
		this.id = id;
		this.nome = nome;
	}
	
	public void adiciona(Produto produto) {
		
		
		
	}

	
	public List<Produto> getProdutos() {
		return produtos;
	}

	public Integer getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

}
