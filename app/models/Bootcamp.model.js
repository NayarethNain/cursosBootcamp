import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js'

const Bootcamp = sequelize.define(
    "Bootcapms", 
    {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        isInt: true, 
        min: 0,      
           
      },
  },
  description: {
    type: DataTypes.STRING(300),
    allowNull: false,
   
  },
}, 
{
   timestamps: false,
   tableName: "Bootcamps",
}
);

export default Bootcamp;