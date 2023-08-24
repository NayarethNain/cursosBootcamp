import Usuario from "./user.model.js";
import Bootcamp from "./Bootcamp.model.js";



// RELACION 1 A 1
/*Usuario.hasOne(Bootcamp, {
    foreignKey: "usuarioId",
    as: "direccion",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Bootcamp.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    as: "propietario",
});*/

//RELACION 1 A MUCHOS
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







//COPIA************************************************
/**Usuario.belongsToMany(Bootcamp, {
    foreignKey:"usuarioId",
    as: "bootcamp",
    through: 'user_bootcamp'
    
});
Bootcamp.belongsToMany(Usuario, {
    foreignKey:"usuarioId",
    as: "alumno",
    through: 'user_bootcamp'
});*/