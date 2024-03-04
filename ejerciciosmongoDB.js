/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'NEW_DATABASE_NAME';
const collection = 'NEW_COLLECTION_NAME';

// Create a new database..
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/


db.createCollection('users')

db.users.find()

/* 1 ejercicio: 1. Listado de todos los usuarios con solo los nombres, apellidos y edad, que tengan 20 años de edad.*/

db.users.find({edad:20}, {nombres:1,apellidos:1,edad:1})

/* 2 ejercicio: Listado de todas las mujeres en la base de datos que tengan entre 20 y 30 años de edad. gte, mayor que y lte, menos que*/

db.users.find({$and:[{genero:"M"},{edad:{$gte:20,$lte:30}}]})

/* 3 ejercicio: Quién es la persona con menos edad de la base de datos. */

db.users.findOne({}, { nombres: 1, apellidos: 1, edad: 1 }, { sort: { edad: 1 } })

/* 4 ejercicio: Cuantos usuarios hay registrados en la base de datos.  */

db.users.count()

/*  5 ejercicios: Traer los 5 primeros usuarios de la base de datos */

db.users.find().limit(5) 

/* 6 ejercicio:  Traer los 10 últimos usuarios de la base de datos  el -1: el final de la lista*/

db.users.find().sort({ _id: -1 }).limit(10)

/* 7 ejercicio: Listar usuarios que su correo finalice en .net  /.*\: que termine en*/

db.users.find({ correo: /.*\.net$/ })

/* 8 ejercicio: Listar usuarios no vivan en  colombia. $ne que no contega*/

db.users.find({ pais: { $ne: "Colombia" } })

/* 9 ejercicio: Listar usuarios que no vivan en ecuador y panamá. $nin, que contenga*/

db.users.find({ pais: { $nin: ["ecuador", "panamá"] } })

/* 10 ejercicio:  Cuantos(numero) usuarios son de colombia y les gusta el rock. */

db.users.find({ pais: "colombia", musica: "rock" }).count()

/* 11 ejercicio: Actualizar el género musical de todos los usuarios de la base de datos de "metal" a "carranga". */

db.users.updateMany({ musica: "metal" }, { $set: { musica: "carranga" } })

db.users.find({musica:"carranga"})

/* 12 ejercicio: Listado de hombres que les guste la "carranga" sean de colombia y tengan entre 10 y 20 años de edad. */

db.users.find({$and:[{genero:"H"},{musica:"carranga"},{edad:{$gte:10,$lte:20}},{pais:"colombia"}]})

/* 13 ejercicio: Actualizar a todos los usuarios que tengan 99 años, su nuevo género musical favorito será la "carranga" */

db.users.updateMany({ edad: 99 }, { $set: { musica: "carranga" } })

db.users.find({musica:"carranga"})

/* 14 ejercicio: Listar todos los usuarios que su nombre inicie con "a","A" /^ aplica el camelCase, se le indica la letra, y la i es para darle contenido*/

db.users.find({nombres:/^a/i})

/* 15 ejercicio: Listar todos los usuarios que su apellido finalice en "z","Z" */

db.users.find({ apellidos: /z$/i })

/* 16 ejercicio: Actualizar los usuarios que tengan 50 años de edad su nuevo género musical será NULL */

db.users.updateMany({ edad: 50 }, { $set: { musica: null } })

db.users.find({edad:50})

/* 17 ejercicio: Listar todos los usuarios que su género musical sea igual a NULL */

db.users.find({ musica: null })

/* 18 ejercicio: Cual es el resultado de la suma de todas las edades de la base de datos. */

db.users.aggregate([{ $group: { _id: null, total: { $sum: "$edad" } } }])

/* 19 ejercicio: Cuantos usuarios tenemos registrados de "ecuador" */

db.users.find({ pais: "ecuador" }).count()

/* 20 ejercicio: Cuántos usuarios son de Colombia y les gusta el vallenato..git  */

db.users.find({ pais: "colombia", musica: "vallenato"}).count()







