show databases;
create database blablatec;
use blablatec;
create table veiculo(
id_veiculo integer primary key not null auto_increment,
id_placa_veiculo char(8) not null,
nm_modelo_veiculo varchar (20) not null,
nm_cor_veiculo varchar (10) not null,
qt_lugar_veiculo varchar (10) not null);

create table usuario(
id_usuario integer primary key not null auto_increment,
nm_usuario varchar (100) not null,
nm_sobrenome_usuario varchar (100) not null,
nm_email_usuario varchar (100) not null,
cd_passwordsalt blob,
cd_passwordhash blob,
cd_telefone_usuario char (11) not null,
im_usuario blob ,
cd_ra_usuario varchar(20) not null,
id_veiculo integer,
CONSTRAINT fk_id_placa_veiculo FOREIGN KEY (id_veiculo) references veiculo(id_veiculo);


create table viagem(
id_viagem integer primary key not null auto_increment,
nm_origem_viagem varchar (100) not null,
nm_destino_viagem varchar (100) not null);

create table avaliacao(
 id_avaliacao integer primary key not null auto_increment,
 vl_avaliacao char (5) ,
id_usuario_avaliador integer,
id_usuario_avaliado integer,
id_item_viagem integer,
CONSTRAINT fk_avaliador FOREIGN KEY (id_usuario_avaliador) references usuario(id_usuario),
CONSTRAINT fk_avaliado FOREIGN KEY (id_usuario_avaliado) references usuario(id_usuario),
CONSTRAINT fk_item_viagem FOREIGN KEY (id_item_viagem) references itemViagem(id_item_viagem)
);
 
 create table avaliacaoPlataforma(
 id_avaliacao_plataforma integer primary key not null auto_increment,
 vl_avaliacao_plataforma char (5),
id_usuario integer,
CONSTRAINT fk_plataforma FOREIGN KEY (id_usuario) references usuario(id_usuario));
 
 create table itemViagem(
 id_item_viagem integer primary key not null auto_increment,
 dt_viagem date not null,
 hr_viagem time not null,
 vl_viagem double (8,2) not null,
id_usuario_carona integer,
id_usuario_motorista integer,
CONSTRAINT fk_carona FOREIGN KEY (id_usuario_carona) references usuario(id_usuario),
CONSTRAINT fk_motorista FOREIGN KEY (id_usuario_motorista) references usuario(id_usuario)
);

select*from usuario;

INSERT INTO veiculo(id_veiculo,id_placa_veiculo, nm_modelo_veiculo,nm_cor_veiculo, qt_lugar_veiculo) VALUES
(NULL,'12345678', 'volkswagen', 'branco', 8);

select*from veiculo;


INSERT INTO usuario (id_usuario,nm_usuario,nm_sobrenome_usuario, nm_email_usuario,cd_passwordsalt, cd_passwordhash, cd_telefone_usuario, im_usuario, cd_ra_usuario) VALUES
(NULL, 'Jose Roberto','da Silva', 'jose@gmail.com',NULL, NULL, 13974856393, 'photo', '1234567897458' );

select*from usuario;

INSERT INTO viagem (id_viagem,nm_origem_viagem, nm_destino_viagem) 
VALUES (null, 'São Vicente', 'Praia Grande');

select*from viagem;


INSERT INTO avaliacao (id_avaliacao,vl_avaliacao, id_usuario_avaliador, id_usuario_avaliado, id_item_viagem) 
VALUES (null, 5 , null, null, null);

SELECT * FROM avaliacao;

INSERT INTO avaliacaoplataforma (id_avaliacao_plataforma,vl_avaliacao,id_usuario) 
  VALUES (null, 5, null);

SELECT * FROM avaliacaoplataforma;

INSERT INTO itemViagem ( id_item_viagem, dt_viagem, hr_viagem, vl_viagem, id_usuario_carona, id_usuario_motorista) 
VALUES (null, '20200521', '12:23:06', 25.30, null, null);

SELECT*FROM itemviagem;



