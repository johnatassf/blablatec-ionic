drop database blablatec;
create database blablatec;
use blablatec;

CREATE TABLE veiculo(
id_veiculo integer primary key not null auto_increment,
id_placa_veiculo char(8) not null,
nm_modelo_veiculo varchar (20) not null,
nm_cor_veiculo varchar (10) not null,
qt_lugar_veiculo int (10) not null);

CREATE TABLE usuario(
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
CONSTRAINT fk_id_placa_veiculo FOREIGN KEY (id_veiculo) references veiculo(id_veiculo));

CREATE TABLE viagem(
id_viagem integer primary key not null auto_increment,
nm_origem_viagem varchar (500) not null,
nm_destino_viagem varchar (500) not null,
id_item_viagem integer,
dt_viagem datetime not null,
dt_finalizacao datetime,
id_usuario_motorista integer,
qt_lugar_disponivel int,
vl_viagem decimal(10,2),
constraint fk_usuario_motorista foreign key (id_usuario_motorista) references usuario(id_usuario)
);

CREATE TABLE itemViagem(
 id_item_viagem integer primary key not null auto_increment,
 cd_latitude_inicial varchar(200) not null,
 cd_longitude_final varchar(200) not null,
 id_viagem integer,
CONSTRAINT fk_viagem FOREIGN KEY (id_viagem) references viagem(id_viagem)
);

CREATE TABLE usuarioCaronaViagem(
id_usuario_carona_viagem integer primary key not null auto_increment,
id_item_viagem integer,
id_usuario integer,
constraint fk_item_viagem foreign key (id_item_viagem) references itemViagem(id_item_viagem)

);

CREATE TABLE avaliacaoPlataforma(
 id_avaliacao_plataforma integer primary key not null auto_increment,
 vl_avaliacao char (5) ,
id_usuario integer,
CONSTRAINT fk_plataforma FOREIGN KEY (id_usuario) references usuario(id_usuario));

CREATE TABLE rotasAtivas(
	id_rotas_ativas integer primary key auto_increment,
    cd_latitude_atual varchar(200) not null,
    cd_longitude_atual varchar(200) not null,
    id_item_viagem integer not null,
    CONSTRAINT fk_rotas_item_viagem FOREIGN KEY (id_item_viagem) REFERENCES itemViagem(id_item_viagem)); 

CREATE TABLE solicitacaoViagem(
		id_solicitacao_viagem integer primary key auto_increment,
		id_usuario_carona integer, 
		id_viagem integer,
		CONSTRAINT fk_sv_id_usuario FOREIGN KEY (id_usuario_carona) REFERENCES usuario(id_usuario),
		CONSTRAINT fk_sv_id_viagem FOREIGN KEY (id_viagem) REFERENCES viagem(id_viagem)
	);


