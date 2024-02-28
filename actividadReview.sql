SHOW DATABASES;

CREATE TABLE materials(
    id INT PRIMARY KEY AUTO_INCREMENT,
    materia VARCHAR(45)
)

SELECT * FROM materials

DROP TABLE materials

CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    edad VARCHAR(20) NOT NULL,
    nota INT(10) NOT NULL,
    materials_id INT
);

SELECT * FROM students

ALTER TABLE students ADD FOREIGN KEY (materials_id) REFERENCES materials (id)

SELECT * FROM students INNER JOIN materials WHERE students.materials_id = materials.id