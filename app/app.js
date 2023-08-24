import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as userController from "./controllers/user.controllers.js"
import * as bootcampController from "./controllers/bootcamp.controller.js"

const app = express();

//middlewares generales del proyecto
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());// req.body
app.use(express.urlencoded({ extended: true })); // req.body



//RUTAS
//rutas para usuario
app.get("/api/usuarios", userController.findAll);//lista de usuarios
app.post("/api/usuarios", userController.create);//crear usuario
app.get("/api/usuarios/:id", userController.findById);//Buscar usuario
app.delete("/api/usuarios/:id", userController.deleteById);// DELETE
app.put("/api/usuarios/:id", userController.updateById);//UPDATE


//rutas bootcamp
app.get("/api/bootcamp", bootcampController.findAll);//lista de bootcamps
app.post("/api/bootcamp", bootcampController.create);//crear bootcamp
app.post("/api/bootcamp/adduser", bootcampController.addUser);//agregar usuario



//RUTAS POR DEFECTO

app.all("*", (req, res) => {
    res.status(404).send("Ruta desconocida")
})

export default app;