criar banco de dados

CREATE DATABASE controle_compras;

#######################################################################################################################################

listar bancos de dados

\l

#######################################################################################################################################

lista de relações

\d

#######################################################################################################################################

conectar banco de dados

\c controle_compras;

#######################################################################################################################################

criar tabela

CREATE TABLE compras (id serial primary key, 	# valor sequencial, chave primária
						data date,				# Date
						valor decimal, 			# float
						descricao varchar(250),	# string de 250 chars
						recebido smallint);		# "boolean" => 0 = não recebido, 1 = recebido 

#######################################################################################################################################

inserir valores

INSERT INTO compras (valor, data, descricao, recebido) VALUES (100.0, '2019-04-22', 'presente de namoro', 1);

#######################################################################################################################################

selecionar inserções

# tudo
SELECT * FROM compras;

# like
SELECT * FROM compras WHERE descricao LIKE 'COMPRAS%';

# between
SELECT valor, data, descricao FROM compras WHERE data BETWEEN '01-01-2019' and '12-31-2019' AND NOT valor < 20;

# altera padrão data
SELECT id, data, to_char(data, 'dd-mm-yyyy') as DataFormatada from compras;

#######################################################################################################################################

inserir de arquivo

\i path_name/archive.sql
\i C:/Users/lfeli/Downloads/dump-postgres.sql

#######################################################################################################################################


atualizar valores

linha errada: "46 | 2000 | 2011-09-03 | NOME | 1"
mudar de 03/09 para 09/03

update compras set data = '03-09-2011' where id = 46;

#######################################################################################################################################

deletar inserções

delete from compras where data between '2009-01-01' and '2009-12-31';

#######################################################################################################################################

alterar tabela/coluna

# valores not null
ALTER TABLE compras ALTER COLUMN valor SET NOT NULL;

# valores default
ALTER TABLE compras ALTER COLUMN valor SET DEFAULT 0;

#######################################################################################################################################

criar tabela com formas de pagamento (enum só recebe os dados setados)

create type enum_pagamento as enum ('cartao', 'boleto', 'dinheiro');

alter table compras add column form_pagto enum_pagamento;
      
inserindo

insert into compras (valor, data, descricao, recebido, form_pagto) values (100, '01-01-2013', 'comida', 1, 'cartao');

#######################################################################################################################################

alterar nome tabela (form_pagto -> forma_pagamento)

alter table compras rename form_pagto to forma_pagamento;

#######################################################################################################################################

alterar coluna forma_pagamento para não nula (caso a coluna já exista, primeiro não a deixe nula, depois altera coluna)

update compras set forma_pagamento = 'cartao'; # isso altera toda a coluna

alter table compras alter column forma_pagamento set not null;

#######################################################################################################################################

seleciona soma da coluna valor

select sum(valor) from compras where data between '2010-01-1' and '2010-12-31';

seleciona linhas da tabela compras

select sum(*) from compras where data between '2010-01-1' and '2010-12-31';

seleciona média da coluna valor

select avg(valor) from compras where data between '2010-01-1' and '2010-12-31';

seleciona as opções acima, modificando o nome da colunas na tela

select sum(valor) as total, sum(*) as quantidade, avg(valor) as média from compras where data between '2010-01-1' and '2010-12-31';

#######################################################################################################################################

selecionar a soma dos valores de anos iguais

select to_char(data, 'YYYY') as ano, sum(valor) from compras group by ano;

#######################################################################################################################################

média da soma dos valores entre 2014 e 2015

select (select sum(c1.valor) from compras c1 where c1.data between '2014-01-01' and '2014-12-31') - 
	(select sum(c2.valor) from compras c2 where c2.data between '2015-01-01' and '2015-12-31');

ou

select sum(c1.valor) - (select sum(c2.valor) from compras c2 where c2.data between '2015-01-01' and '2015-12-31') 
	from compras c1 where c1.data between '2014-01-01' and '2014-12-31';

#######################################################################################################################################

criar tabela lojas e liga seu id com o id das compras da tabela compras

create table lojas (id serial, nome varchar(100), endereco varchar(100), telefone varchar(20), primary key (id));

insert into lojas (nome, endereco, telefone) values ('extra', 'rua a', '12345678'), ('carrefour', 'rua b', '87654321');

alter table compras add column loja_id int;

update compras set loja_id = 1 where id < 20;
update compras set loja_id = 0 where id >= 20; # isso causa conflito caso haja chave estrangeira na tabela

update compras set loja_id = 2 where id >= 20; # consertando o erro

alter table compras add foreign key (loja_id) references lojas (id); # o id da tabela loja está ligado à tabela compras

select * from compras, lojas where loja_id = lojas.id; 

#######################################################################################################################################

selecionando duas tabelas com join

select * from compras join lojas on lojas_id = lojas.id;

#######################################################################################################################################

selecionar múltiplos

select * from nomes, nomes n2 # mostra todas as duplas combinações possíveis entre os nomes da tabela

#######################################################################################################################################

selecionar todas as compras de uma loja através de seu nome

select * from compras c join lojas l on c.lojas_id = l.id 
	where l.nome = 'extra';

selecionar todas as compras de valor igual

SELECT
	c1.id,
	c1.valor,
	c2.id,
	c2.valor
FROM 
	compras c1,
	compras c2
WHERE 
	c1.valor = c2.valor
	AND c1.id != c2.id;
