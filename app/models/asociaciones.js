import Usuario from "./user.model.js";
import Bootcamp from "./Bootcamp.model.js";



//RELACION muchos A MUCHOS
Bootcamp.belongsToMany(Usuario, {
    through: 'Bootcamp_Usuarios',
    as: 'user',
    //foreignKey: 'bootcampID'
});


Usuario.belongsToMany(Bootcamp, {
    through: 'Bootcamp_Usuarios',
    as: 'bootcamp',
    //foreignKey: 'usuarioId'
});







