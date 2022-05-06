create database marcoantonio;
use marcoantonio;

/*criar as tabelas*/

create table DEPARTAMENTOS(
cod_depart int auto_increment,
nome_depart varchar(60),
localizacao_depart varchar(30),
primary key (cod_depart)
);



create table FUNCIONARIOS(
codigo_funcionario int auto_increment,
primeiro_nome varchar(40) not null,
segundo_nome varchar(40),
ultimo_nome varchar(40) not null,
cidade varchar(45) not null,
cep int,
telefone int,
funcao varchar(30),
salario int,
fk_cod_depart int,
primary key (codigo_funcionario),
constraint fk1 foreign key (fk_cod_depart) references DEPARTAMENTOS (cod_depart)
);

/*alimentar a tabela de DEPARTAMENTOS*/


insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('Desenvolvimento','Belo Horizonte');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('Modelagem','Belo Horizonte');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('Chefia','Nova Lima');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('Recepcao','Belo Horizonte');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('Venda','Nova Lima');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('','');
insert into DEPARTAMENTOS (nome_depart,localizacao_depart) VALUES ('','Contagem');

/*alimentar a tabela de FUNCIONARIOS*/

insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Marcos','Bernad','Oliver','Lagoa_Santa',
31333700,35321478,'Programador',1000,1);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Maria','Roche','Leroy','Lagoa_Santa',
31333790,35505050,'Analista',2500,1);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Bruno',null,'Dubois','Belo_Horizonte',
31330601,35355151,'Supervisor',5000,3);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Laura','Melgado','Fohn','Sete_Lagoas',
40330700,41414000,'Recepcionista',1200,4);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Valentina','Maria','Oliveira','Nova_Lima',
36500100,35324550,'Vendedora',3000,5);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Gabriel',null,'Silva','Belo_Horizonte',
31330700,null,'Programador',1200,1);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Jose',null,'Nunes','Contagem',
'36500105',null,'Programador','1500','1');
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Flavia','de Castro','Ribeiro','Contagem',
'36500105',null,'Programadora','1500',null);
insert into FUNCIONARIOS (primeiro_nome,segundo_nome,
ultimo_nome,cidade,cep,telefone,funcao,salario,fk_cod_depart) values ('Ana',null,'Silva','Contagem',
null,null,null,null,null);


