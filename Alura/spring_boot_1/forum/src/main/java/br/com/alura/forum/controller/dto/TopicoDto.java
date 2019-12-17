package br.com.alura.forum.controller.dto;

import br.com.alura.forum.modelo.Topico;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;

@Data
public class TopicoDto {
	
	private Long id;
	private String titulo;
	private String messagem;
	private LocalDateTime dataCriacao;
	
	public TopicoDto(Topico topico) {
		this.id = topico.getId();
		this.titulo = topico.getTitulo();
		this.messagem = topico.getMensagem();
		this.dataCriacao = topico.getDataCriacao();
	}

	public static Page<TopicoDto> converter(Page<Topico> topicos) {
		return topicos.map(TopicoDto::new);
	}
}
