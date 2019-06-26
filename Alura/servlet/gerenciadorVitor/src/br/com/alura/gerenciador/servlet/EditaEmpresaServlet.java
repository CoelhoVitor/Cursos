package br.com.alura.gerenciador.servlet;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/editaEmpresa")
public class EditaEmpresaServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	// Mostra tela para alteração e informações da empresa
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String paramId = request.getParameter("id");
		Integer id = Integer.valueOf(paramId);
		
		Banco banco = new Banco();		
		Empresa empresa = banco.findEmpresaById(id);
		
		request.setAttribute("empresa", empresa);
		
		RequestDispatcher rd = request.getRequestDispatcher("/telaEditaEmpresa.jsp");
		rd.forward(request, response);
		
	}
	
	// Salva as alterações da empresa e muda de tela
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				
		String paramId = request.getParameter("id");
		Integer id = Integer.valueOf(paramId);		
		String nomeEmpresa = request.getParameter("nome");
		String dataEmpresa = request.getParameter("dataCriacao");
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Date dataCriacao = null;
		
		try {
			dataCriacao = sdf.parse(dataEmpresa);
		} catch (ParseException e) {
			throw new ServletException(e);
		}
		
		Banco banco = new Banco();
				
		Empresa empresa = banco.findEmpresaById(id);
		empresa.setNome(nomeEmpresa);
		empresa.setDataCriacao(dataCriacao);
		
		request.setAttribute("empresa", empresa.getNome());
		
		response.sendRedirect("listaEmpresas");	
		
	}

}
