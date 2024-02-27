SHOW DATABASES;


CREATE TABLE students(
    id_student INT PRIMARY KEY AUTO_INCREMENT,
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
    id_material INT PRIMARY KEY AUTO_INCREMENT,
    materia VARCHAR(45),
    id_student int,
    Foreign Key (id_student) REFERENCES students(id_student)
)

DROP TABLE materials

INSERT INTO materials (materia, id_student) VALUES 
('Matematicas', 2),
('Español', 3),
('Ingles', 5),
('Etica', 5),
('Sociales', 1),
('Ciencias', 2),
('Fisica', 2),
('Quimica', 4),
('Tecnologia', 5),
('Estadistica', 1)

SELECT * FROM materials

CREATE TABLE Notas (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nota DECIMAL (1,0),
    id_student  INT,
    id_material INT,
    Foreign Key (id_student) REFERENCES students(id_student),
    Foreign Key (id_material) REFERENCES materials(id_material)
)

DROP TABLE Notas

SELECT * FROM Notas

INSERT INTO Notas (nota,id_student,id_material  ) VALUES (4.3, 1, 1)

