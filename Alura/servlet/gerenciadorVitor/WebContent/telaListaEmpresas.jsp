<%@ page import="java.util.List, br.com.alura.gerenciador.servlet.Empresa"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<html>
<head>
<title>Curso Java Servlet</title>
</head>
<body>

	<c:if test="${not empty empresa}">
		Empresa ${empresa} cadastrada com sucesso!
	</c:if>
	
	<br/>

	<p>Lista de Empresas Cadastradas:</p>
	
	<ul>
		<c:forEach items="${empresas}" var="empresa">
			<li>
				Empresa ${empresa.nome} - <fmt:formatDate value="${empresa.dataCriacao}" pattern="dd/MM/yyyy"/> 
				<a href="/gerenciadorVitor/editaEmpresa?id=${empresa.id}">Editar</a>
				<a href="/gerenciadorVitor/removeEmpresa?id=${empresa.id}">Remover</a>				
			</li>
		</c:forEach>
	</ul>

</body>
</html>