-- Active: 1709121424948@@127.0.0.1@3306@db
SHOW DATABASES;

CREATE TABLE marcas (
    id INT PRIMARY KEY AUTO_INCREMENT, marca VARCHAR(45) NOT NULL
);

INSERT INTO marcas (marca) VALUES ('Chevrolet'), ('Nissan')

CREATE TABLE tipo_vehiculo (
    id INT PRIMARY KEY AUTO_INCREMENT, tipo_vehiculo VARCHAR(45) NOT NULL, marcas_id INT
)

INSERT INTO
    tipo_vehiculo (tipo_vehiculo)
VALUES ('Carro'),
    ('Camion')

CREATE TABLE colores (
    id INT PRIMARY KEY AUTO_INCREMENT, color VARCHAR(45) NOT NULL
)

INSERT INTO colores (color) VALUES ('Amarillo'), ('Azul')

CREATE TABLE vehiculos (
    id INT PRIMARY KEY AUTO_INCREMENT, modelo INT(4), placa VARCHAR(10), colores_id INT, tipo_vehiculo_id INT, tipo_vehiculo_marcas_id INT
)

INSERT INTO
    vehiculos (modelo, placa)
VALUES (2008, 'SDW333'),
    (2001, 'HJY666')

SELECT * FROM vehiculos

ALTER TABLE tipo_vehiculo
ADD FOREIGN KEY (marcas_id) REFERENCES marcas (id)

ALTER TABLE vehiculos
ADD FOREIGN KEY (colores_id) REFERENCES colores (id)

ALTER TABLE vehiculos
ADD FOREIGN KEY (tipo_vehiculo_id) REFERENCES tipo_vehiculo (id)

SELECT *
FROM vehiculos
    INNER JOIN colores
WHERE
    vehiculos.colores_id = colores.id

SELECT *
FROM vehiculos
    INNER JOIN tipo_vehiculo
WHERE
    vehiculos.tipo_vehiculo_id = tipo_vehiculo.id

SELECT *
FROM
    vehiculos
    INNER JOIN colores
    INNER JOIN tipo_vehiculo
    INNER JOIN marcas
WHERE
    vehiculos.tipo_vehiculo_id = tipo_vehiculo.id
    and vehiculos.colores_id = colores.id
    and tipo_vehiculo.marcas_id = marcas.id