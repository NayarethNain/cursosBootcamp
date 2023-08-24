import app from "./app/app.js"
import sequelize from "./app/config/db.config.js";

import "./app/models/asociaciones.js";


const main = async () => {
 try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true}); 
    console.log("conectado a la base de datos")
    app.listen(3000, () => console.log("servidor escuchando en puerto 3000"))
    
 } catch (error) {
    console.log("Error al iniciar la aplicacion")
 }
}

main();