const {DataTypes} = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    speed:{
      type: DataTypes.INTEGER,
    },
    height:{
      type: DataTypes.FLOAT
    },
    weight:{
      type: DataTypes.FLOAT
    }
  },
  {timestamps: false});
};
