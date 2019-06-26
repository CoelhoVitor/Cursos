package br.com.caelum.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class TestaInsercao {

	public static void main(String[] args) throws SQLException {
		
		try (Connection connection = new ConnectionPool().getConnection()) {		
			connection.setAutoCommit(false);
			String sql = "insert into produto (nome, descricao) values (?, ?)";
			
			try (PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
				
				adiciona("Notebook i5", "Notebook i5 7a Geração", statement);
				adiciona("Notebook i5", "Notebook i5 6a Geração", statement);
				connection.commit();
				
			} catch (Exception e) {
				e.printStackTrace();
				connection.rollback();
				System.out.println("Rollback efetuado");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static void adiciona(String nome, String descricao, PreparedStatement statement) throws SQLException {
		if (nome.equals("Blueray")) {
		    throw new IllegalArgumentException("Problema ocorrido");
		}
		statement.setString(1, nome);
		statement.setString(2, descricao);
		boolean resultado = statement.execute();
		System.out.println(resultado);
		ResultSet resultSet = statement.getGeneratedKeys();
		
		while(resultSet.next()) {
			long id = resultSet.getLong("id");
			System.out.println("id gerado: " + id);
		}		
		resultSet.close();
	}
}
