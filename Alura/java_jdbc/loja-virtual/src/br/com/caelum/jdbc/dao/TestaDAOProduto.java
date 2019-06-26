 package br.com.caelum.jdbc.dao;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import br.com.caelum.jdbc.ConnectionPool;
import br.com.caelum.jdbc.model.Produto;

public class TestaDAOProduto {
	
	public static void main(String[] args) throws SQLException {
		Produto mesa = new Produto("Mesa Azul", "Mesa com 4 pés");
		
		try(Connection con = new ConnectionPool().getConnection()) {
			ProdutoDAO dao = new ProdutoDAO(con);
			dao.salva(mesa);
			
			List<Produto> produtos = dao.lista();
			for(Produto produto : produtos) {
				System.out.println("Existe o produto: " + produto);
			}
			
		}
		
	}

}
