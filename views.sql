SHOW DATABASES;

SELECT * FROM users

/* 3: Realizar 5 ejemplos de VIEWS Y 5 de procedimientos almacenados con la base de datos de prueba.  */


/* ejemplo 1 views */
CREATE VIEW paises AS SELECT  nombres, apellidos, correo, pais FROM users WHERE pais = "costa rica"

SELECT * FROM paises

/* ejemplo 2 views */
CREATE VIEW mayor_edad AS SELECT nombres, apellidos, correo, edad FROM users WHERE edad >18

SELECT * FROM mayor_edad

/* ejemplo 3 views */
CREATE VIEW id_user AS SELECT id, nombres, apellidos, correo, edad FROM users WHERE lower(nombres) like 'a%'

SELECT * FROM id_user

/* ejemplo 4 views */
CREATE VIEW correo AS SELECT id, nombres, correo FROM users WHERE correo like '%.net'

SELECT * FROM correo

/* ejemplo 5 views */
CREATE VIEW apellidos AS SELECT id, nombres, apellidos FROM users WHERE apellidos = "Muller"

SELECT * FROM apellidos


/* ejemplo 1 procedure */
CREATE PROCEDURE consultarUser (IN edaduser INT)
BEGIN
    SELECT * FROM users WHERE edaduser = edad;
END


CALL consultarUser(12)


/* ejemplo 2 procedure */
CREATE PROCEDURE cambiarEmail(
  IN nombreUsuario VARCHAR(155),
  IN correoUsuario VARCHAR(155)
)
BEGIN
  UPDATE users
  SET correo = correoUsuario
  WHERE nombres = nombreUsuario;
END 

DROP PROCEDURE cambiarApellido

CALL cambiarEmail('Kacie Gutmann', 'KennedyBet@hotmail.com');


/* ejemplo 3 procedure */
CREATE PROCEDURE cambiarApellido(
    IN apellidos VARCHAR(45)
)
BEGIN
  UPDATE users
  SET apellidos = apellidos
  WHERE edad < 12;
END 

CALL cambiarApellido ('Miller')


/* ejemplo 4 procedure */

DELIMITER //
CREATE PROCEDURE cambiarCiudad(
    IN pai VARCHAR(45)
)
BEGIN
  UPDATE users
  SET pais = pai
  WHERE pais = "canada";
END
DELIMITER ;

CALL cambiarCiudad ('Holanda')


/* ejemplo 5 procedure */

DELIMITER //
CREATE PROCEDURE verFecha(
    IN id INT,
    IN fecha TIMESTAMP
)
BEGIN
    SELECT * FROM users
    WHERE id = id;
END;
DELIMITER ;

DROP PROCEDURE verFecha

CALL cambiarCiudad (12)
