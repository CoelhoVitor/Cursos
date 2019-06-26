<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<c:url value="/editaEmpresa" var="linkServletEditaEmpresa" />

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Curso Java Servlet</title>
</head>
<body>

	<form action="${linkServletEditaEmpresa}" method="post">
	
		<input type="hidden" name="id" value="${empresa.id}" />
		Nome: <input type="text" name="nome" value="${empresa.nome}"/>
		Data de Criação: <input type="text" name="dataCriacao" 
							value="<fmt:formatDate value="${empresa.dataCriacao}" pattern="dd/MM/yyyy"/>" />
		
		<input type="submit" />	
	
	</form>

</body>
</html>