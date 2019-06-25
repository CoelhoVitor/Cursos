package br.com.alura.gerenciador.servlet;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

// Simula um Banco de Dados

public class Banco {
	
	private static List<Empresa> empresas = new ArrayList<>();
	private static Integer idContador = 1;
	
	static {
		Empresa empresa = new Empresa();
		empresa.setId(Banco.idContador++);
		empresa.setNome("ConsulData");
		empresas.add(empresa);
		
		Empresa empresa2 = new Empresa();
		empresa2.setId(Banco.idContador++);
		empresa2.setNome("FMacedo");
		empresas.add(empresa2);
	}

	public void adiciona(Empresa empresa) {
		empresa.setId(Banco.idContador++);
		Banco.empresas.add(empresa);		
	}
	
	public void removeEmpresa(Integer id) {
		
		Iterator<Empresa> it = empresas.iterator();
		
		Empresa emp;
		while(it.hasNext()) {
			emp = it.next();
			
			if(emp.getId() == id) {
				it.remove();
			}
		}
		
	}
	
	public Empresa findEmpresaById(Integer id) {
		for (Empresa empresa : empresas) {
			if (empresa.getId() == id) {
				return empresa;
			}
		}
		return null;
	}
	
	public List<Empresa> getEmpresas() {
		return Banco.empresas;
	}

}
