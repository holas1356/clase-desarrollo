SHOW DATABASES;

/* 1 ejercicio, nombres y apellidos de todas las personas que tienen 20 años */
SELECT nombres, apellidos, edad FROM users WHERE edad= 20

/* 2 ejercicio ,mujeres que tengan entre 20 y 30 años */

SELECT * FROM users WHERE genero = 'M' AND edad > 20 AND edad < 30

/* 3 ejercicio, ACs, acsendente, ORDER BY, es ordenar,limit, limita , mostrar la persona con menor edad*/
SELECT nombres, apellidos, edad, genero FROM users ORDER BY edad ASC LIMIT 1

SELECT  nombres, apellidos,MIN(edad) FROM users

/* 4 ejercicio, cuantos usuarios hay registrados en la base de datos, COUNT, contar */

SELECT COUNT(*) FROM users

/* 5 ejercicio, traer los 5 primeros usuarios de la base de datos */

SELECT * FROM users ORDER BY id ASC LIMIT 5

SELECT * FROM users ORDER BY LIMIT 5

/* 6 ejercicio, traer los 10 ultimos usuarios de la base de datos */

SELECT * FROM users ORDER BY id DESC LIMIT 10

/* 7 ejercicio, listar usuarios que su correo finalice en .net,  like = como, iguales a. similar a */

SELECT * FROM users WHERE correo LIKE '%.net'

/* 8 ejercicio, listar usuarios que no vivan en colombia, NOT LIKE, que no sea igual a */

SELECT * FROM users WHERE pais NOT LIKE 'colombia'

SELECT * FROM users WHERE pais <> 'Colombia'  /* <> no contenga */

/* 9 ejercicio, listar usuarios que no vivan en ecuador y panama  */

SELECT * FROM users WHERE pais NOT LIKE 'ecuador' AND pais NOT LIKE 'panama'

SELECT * FROM users WHERE pais <> 'ecuador' AND pais <> 'panama' /* <> no contenga */

/* 10 ejercicio, cuatos(numero) usuarios son de colombia y les gusta el rock */

SELECT  COUNT(*) FROM users WHERE musica = 'rock' AND pais = 'colombia'

/* 11 ejercicio, actualizar el genero musical de todos los usuarios de la base de metal a carranga , update para actualizar, set para esécificar lo que queremos reemplazar*/

UPDATE users SET musica= 'carranga' WHERE musica = 'metal'

SELECT * FROM users WHERE musica = 'carranga'

/* 12 ejercicio, listado de hombres que le gusta la carranga, sean de colombia y tengan entre 10 y 20 años de edad */

SELECT * FROM users WHERE genero = 'H' AND musica = 'carranga' AND pais = 'colombia' AND edad > 10 AND edad  < 20

/* 13 ejercicio, actualizar todos los usuarios que tengan 99 años, su nuevo genero musical favorito sera carranga */

UPDATE users SET musica = 'carranga' WHERE edad = 99

SELECT * FROM users WHERE edad= 99

/* 14 ejercicio, listar todos los usuarios que su nombre inicie con la "a", "A", lower, aplica camelcase */

SELECT * FROM users WHERE lower(nombres) like 'a%'

SELECT * FROM users WHERE nombres LIKE 'A%' OR nombres LIKE 'a%'

/* 15 ejercicio, listar todos los usuarios que su apellido finalice en z, Z */

SELECT * FROM users WHERE lower(apellidos)  like '%z'

SELECT * FROM users WHERE apellidos LIKE '%Z' OR apellidos LIKE '%z'

/* 16 ejercicio, Actualizar los usuarios que tengan 50 años de edad su nuevo genero musical sera NULL */

 	/* moficiar la tabla, una columna existente para determinarla NULL */
ALTER TABLE users MODIFY COLUMN musica VARCHAR(200) NULL;

UPDATE users SET musica = NULL WHERE edad = 50 /* actualizar null, el genero de los personas de edad 50 */

SELECT * FROM users WHERE edad = 50

/* 17 ejercicio listar todos los usuarios que su genero musical sea igual a NULL */

SELECT * FROM users WHERE musica NULL

SELECT * FROM users WHERE musica IS NULL

/* 18 ejercicio, cual es el resultado de la suma de todas las edades de la base de datos, SUM para sumar */

SELECT SUM(edad) FROM users

/* 19 ejercicio cuantos usuarios tenemos registrados en ecuador */

SELECT COUNT(*) FROM users WHERE pais = 'ecuador'

/* 20 ejercicio, cuantos usuarios son de colombia y les gusta el vallenato */

SELECT COUNT(*) FROM users WHERE pais = 'colombia' AND musica = 'vallenato'