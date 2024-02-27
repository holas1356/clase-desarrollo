SHOW DATABASES;

CREATE TABLE empresas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    nit VARCHAR(45),
    telefono VARCHAR(20),
    direccion VARCHAR(45)
);

INSERT INTO empresas (nombre, nit, telefono, direccion) VALUES ('aleja', '12345678','3212344323', 'calle 54' )

SELECT * FROM empresas;

CREATE TABLE vehiculos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(45),
    modelo VARCHAR(45),
    marca VARCHAR(20),
    color VARCHAR(45),
    tipo_vehiculo VARCHAR(45)
);

INSERT INTO vehiculos (placa, modelo, marca, color, tipo_vehiculo) VALUES ('SDF123', '2003','Samsung', 'blanco', 'moto' )

SELECT * FROM vehiculos;

CREATE TABLE paises(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45)
);
INSERT INTO paises (nombre) VALUES ('peru' )

SELECT * FROM paises;

CREATE TABLE ciudad(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45)
);
INSERT INTO ciudad (nombre) VALUES ('Cartagena' )

SELECT * FROM ciudad;

CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(45),
    apellidos VARCHAR(45),
    correo VARCHAR(20),
    pasword VARCHAR(45),
    edad VARCHAR(45),
    genero VARCHAR(45),
    altura VARCHAR(45),
    peso VARCHAR(45)
);
INSERT INTO usuarios (nombres, apellidos, correo, pasword, edad, genero, altura, peso) VALUES ('Luisa', 'perez','lp2526727@gmail.com', '123456', '23', 'femenino', '1.65', '62' )

SELECT * FROM usuarios;
