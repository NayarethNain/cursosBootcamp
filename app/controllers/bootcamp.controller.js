import Usuario from "../models/user.model.js";
import Bootcamp from "../models/Bootcamp.model.js";
//ENCONTRAR BOOTCAMPS
export const findAll = async (req, res) => {
    try {
        let bootcamps = await Bootcamp.findAll({
            include:[{
                model: Usuario,
                as: "user"
            },
        ],
        });
        if (bootcamps.length == 0) {
            return res.status(404).json({ code: 404, message: "No se encontro bootcamp" });
        }
        bootcamps = bootcamps.map((bootcamp) => bootcamp.toJSON());

        console.log("bootcamps encontrado", bootcamps);
        res.json({ code: 200, message: "Ok", bootcamps });
    } catch (error) {
        res.status(500), json({
            code: 500, message: "Error al obtener los cursos del sistema"
        });
    }
};

//crear curso
export const create = async (req, res) => {
    try {
        let { title, cue, description } = req.body;

        let bootcamp = await Bootcamp.create({
            title,
            cue,
            description
        });

        console.log("bootcamp creado:", bootcamp);

        res.status(201).json({
            code: 201,
            message: " bootcamp creado con exito",
            bootcamp,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: " error al crear el bootcamp",
        });
    }
};

// AGREGAR INTEGRANTE

export const addUser =  async (req, res) => {
    try {
      let { bootcampID, usuarioId } = req.body;

      let bootcamp = await Bootcamp.findByPk(bootcampID);


      if(!bootcamp) return res.status(404).json({code: 404, message:"bootcamp no existe"});


      let usuario = await Usuario.findByPk(usuarioId);

      if(!usuario) return res.status(404).json({code: 404, message:"usuario no existe"});



      await bootcamp.addUser(usuario);
      return res.status(200).json({code: 200, message:"se ha integrado correctamente el usuario al bootcamp"});

    } catch (error) {
        console.log(error);
        res.status(500), json({
            code: 500, message: "Error al vincular usuario con bootcamp"
        });
    }
}