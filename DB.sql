CREATE DATABASE testing_ali_fullstack;

USE testing_ali_fullstack;

CREATE TABLE users_test_esmeralda_rubin(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
    segundo_nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

SELECT * FROM users_test_esmeralda_rubin;
