import Usuario from "../models/user.model.js";
import Bootcamp from "../models/Bootcamp.model.js";
//LISTA DE USUARIOS
export const findAll = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            include:[{
                model: Bootcamp,
                as: "bootcamp"
            },
        ],
        });
        if (usuarios.length == 0) {
            return res.status(404).json({ code: 404, message: "No se encontraron usuarios" })
        }
        usuarios = usuarios.map(usuario => usuario.toJSON());

        console.log("Usuarios encontrados", usuarios);
        res.json({ code: 200, message: "Ok", usuarios });
    } catch (error) {
        res.status(500), json({
            code: 500, message: "Error al obtener los usuarios del sistema"
        });
    }
};

//crear usuario
export const create = async (req, res) => {
    try {
        let { firstName, lastName, email, title, cue, description } = req.body;

        
        let usuario = await Usuario.create(
            {
            firstName,
            lastName,
            email,
            


        },

        {
            include: [{
                model: Bootcamp,
                as: "bootcamp",
            },
         ],

        }
        );
     

        console.log("usuario creado:", usuario);

        res.status(201).json({ code: 201, message: "usuario creado con éxito", usuario });
    } catch (error) {
      

        console.log(error);
        res.status(500).json({
            code: 500,
            message: " error al crear el usuario",
        });
    }
};

//Buscar usuario
export const findById = async (req, res) => {
    let id = req.params.id;
    try {

        let usuario = await Usuario.findByPk(id)

        if (!usuario) {
            return res
                .status(404)
                .json({ code: 404, message: "No se encontro al usuario con el id:" + id });
        }
        usuario = usuario.toJSON();
        console.log("Usuario encontrado", usuario);
        res.json({ code: 200, message: "Usuario encontrado", usuario });
    } catch (error) {
        res.status(500), json({
            code: 500, message: `Error al obtener el usuario con id ${id} solicitado`,
        });
    }
};

//DELETE USUARIO

export const deleteById = async (req, res) => {
    let id = req.params.id;
    try {

        let usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res
                .status(404)
                .json({
                    code: 404,
                    message: "El usuario que intenta eliminar no existe:"
                });
        }
        await usuario.destroy();

        console.log(`Usuario con id ${id} eliminado`);
        res.json({ code: 200, message: `Usuario con id ${id} eliminado` });
    } catch (error) {
        console.log(error)
        res.status(500), json({
            code: 500, message: `Error al eliminar al usuario con id ${id}`,
        });
    }
}

//ACTUALIZAR UN USUARIO


export const updateById = async (req, res) => {
    let id = req.params.id;
    let { firstName, lastName, email } = req.body;
    try {

        let usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res
                .status(404)
                .json({
                    code: 404,
                    message: "El usuario que intenta eliminar no existe:"
                });
        }
       await usuario.update({
            firstName,
            lastName,
            email,
       });
       console.log("Nuevos datos del usuario", usuario);

        console.log(`Usuario con id ${id} actualizado con exito`);
        res.json({ code: 200, message: `Usuario con id ${id} actualizado` });
    } catch (error) {
        console.log(error)
        res.status(500), json({
            code: 500, message: `Error al actualizar al usuario con id ${id}`,
        });
    }
}