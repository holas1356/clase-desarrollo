SHOW DATABASES;


CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    edad VARCHAR(20) NOT NULL
);
DROP TABLE students


INSERT INTO students (nombre, apellido, edad) VALUES 
('Juan', 'Gaviria','10'),
('Camilo', 'Perez', '12'),
('Luisa', 'Uribe', '14'),
('Cristian', 'Ramirez', '16'),
('Andres', 'Cardona', '18'),
('Samuel', 'Quintero', '20'),
('Sebastian', 'Rojas', '22'),
('Manuela', 'Vera', '24'),
('Sofia', 'Jaramillo', '26'),
('Julian', 'Romal', '34')

SELECT * FROM students


CREATE TABLE materials(
    id INT PRIMARY KEY AUTO_INCREMENT,
    materia VARCHAR(45)
)

DROP TABLE materials

INSERT INTO materials (materia) VALUES 
('Matematicas'),
('Español'),
('Ingles'),
('Etica'),
('Sociales'),
('Ciencias'),
('Fisica'),
('Quimica'),
('Tecnologia'),
('Estadistica')

SELECT * FROM materials

CREATE TABLE Notas (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    edad VARCHAR(20),
    materia VARCHAR(45),
    nota DECIMAL (1,0),
    Foreign Key (id) REFERENCES students(id),
    Foreign Key (id) REFERENCES materials(id)
)

DROP TABLE Notas

SELECT * FROM Notas

INSERT INTO Notas (nota ) VALUES (4.6)

