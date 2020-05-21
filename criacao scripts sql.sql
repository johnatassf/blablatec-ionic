
create table veiculo(
id_placa_veiculo char  (8) primary key not null auto_increment,
nm_modelo_veiculo varchar (20) not null,
nm_cor_veiculo varchar (10) not null,
qt_lugar_veiculo varchar (10) not null);

create table usuario(
id_usuario integer primary key not null auto_increment,
nm_usuario varchar (100) not null,
nm_sobrenome_usuario varchar (100) not null,
nm_email_usuario varchar (100) not null,
nm_senha_usuario char (8) not null,
cd_telefone_usuario char (11) not null,
im_usuario blob ,
cd_ra_usuario integer not null);
CONSTRAINT fk_id_placa_veiculo FOREIGN KEY (id_placa_veiculo) references veiculo(id_placa_veiculo)


create table viagem(
id_viagem integer primary key not null auto_increment,
nm_origem_viagem varchar (100) not null,
nm_destino_viagem varchar (100) not null);

  create table avaliacao(
 id_avaliacao integer primary key not null auto_increment,
 vl_avaliacao char (5) );
 
 create table avaliacaoPlataforma(
 id_avaliacao_plataforma integer primary key not null auto_increment,
 vl_avaliacao char (5) );
 
 create table itemViagem(
 id_item_viagem integer primary key not null auto_increment,
 dt_viagem date not null,
 hr_viagem time not null,
 vl_viagem double (8,2) not null);
 
 ALTER TABLE usuario add constraint fk_usuario foreign key(fk_id_placa_veiculo) references veiculo (id_placa_veiculo);
 ALTER TABLE usuario add fk_id_placa_veiculo char (8);
 desc usuario;
 
 alter table avaliacao add  fk_id_usuario_avaliador integer;
 desc avaliacao;
  alter table avaliacao add  fk_id_usuario_avaliado integer;
  desc avaliacao;
   alter table avaliacao add  fk_id_item_viagem integer;
    ALTER TABLE avaliacao add constraint fk_avaliador foreign key(fk_id_usuario_avaliador) references usuario(id_usuario);
    ALTER TABLE avaliacao add constraint fk_avaliado foreign key(fk_id_usuario_avaliado) references usuario(id_usuario);
    ALTER TABLE avaliacao add constraint fk_item_viagem foreign key(fk_id_item_viagem) references itemViagem(id_item_viagem);
    
     ALTER TABLE avaliacaoPlataforma add fk_id_usuario integer;
     ALTER TABLE avaliacaoPlataforma add constraint fk_plataforma foreign key(fk_id_usuario) references usuario(id_usuario);
     
      ALTER TABLE itemViagem add fk_usuario_carona integer;
      ALTER TABLE itemViagem add constraint fk_carona foreign key(fk_usuario_carona) references usuario(id_usuario);
      
      ALTER TABLE itemViagem add fk_usuario_motorista integer;
      ALTER TABLE itemViagem add constraint fk_motorista foreign key(fk_usuario_motorista) references usuario(id_usuario);
      


      
	 
     
     



   


 
 





