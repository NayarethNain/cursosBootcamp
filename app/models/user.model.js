import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js'

const Usuario = sequelize.define(
    "Usuarios", 
    {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail:{
        msg: "Formato de email no valido (ejemplo@email.com)"
      }
    }
  }
}, 
{
   timestamps: false,
   tableName: "Usuarios",
}
);

export default Usuario;