package br.com.caelum.jdbc;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import br.com.caelum.jdbc.dao.CategoriaDAO;
import br.com.caelum.jdbc.model.Categoria;
import br.com.caelum.jdbc.model.Produto;

public class TestaCategorias {
	
	public static void main(String[] args) throws SQLException {
		
		try(Connection con = new ConnectionPool().getConnection()) {
			
			List<Categoria> categorias = new CategoriaDAO(con).listaComProdutos();
			
			for(Categoria categoria : categorias) {
				System.out.println(categoria.getNome());
			
				for(Produto produto : categoria.getProdutos()) {
					System.out.println(categoria.getNome() + " - " + produto.getNome());
				}
			}
			
		}
		
	}

}
