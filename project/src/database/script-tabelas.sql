-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database TeamLiquid;
use TeamLiquid;

create table usuario(
idUsuario int primary key auto_increment,
nick varchar(45),
email varchar(45),
senha varchar(45));

create table pontuacao(
idPontuacao int primary key auto_increment,
pontos int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));

create table feedback(
idFeedback int primary key auto_increment,
feedback varchar(200),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));
