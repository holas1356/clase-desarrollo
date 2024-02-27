


SHOW DATABASES;
/* creacion de tabla */
CREATE TABLE estudiantes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombres VARCHAR(45),
    apellidos VARCHAR(45),
    correo VARCHAR(150),
    fecha_nacimiento DATE
);
/* eliminar tabla */
DROP TABLE estudiantes;
/* ver tabla */
SELECT * FROM estudiantes;
/* filtrar tabla */
SELECT apellidos FROM estudiantes;
/* insertar a tabla */
INSERT INTO estudiantes (nombres, apellidos, correo, fecha_nacimiento) VALUES ('Jhon', 'Norena','jhon@gmail.com', '2000-11-21' )

DROP TABLE vehiculos;

