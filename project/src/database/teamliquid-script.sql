create database TeamLiquid;
use TeamLiquid;

create table usuario(
idUsuario int primary key auto_increment,
nick varchar(45),
email varchar(45),
senha varchar(45));

create table pontuacao(
idPontuacao int primary key auto_increment,
tempo time,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));

create table feedback(
idFeedback int primary key auto_increment,
feedback int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));