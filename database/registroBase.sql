
/*creamos la base datos*/
create database if not exists simdirne_siscoem;

/*Indicamos que trabajaremos con la base de datos creada*/
use logins;

/*crear la tabla de usuario*/
CREATE TABLE logins (
id int PRIMARY KEY NOT NULL,
nombre varchar(250) NOT NULL,
apePaterno varchar(75) NOT NULL,
apeMaterno varchar(75) NOT NULL,
email varchar(75) NOT NULL,
password varchar(50) NOT NULL,
confirm_password varchar(50) NOT NULL,
created_at datetime NOT NULL DEFAULT current_timestamp(),
updated_at datetime NOT NULL DEFAULT current_timestamp()
 ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

);