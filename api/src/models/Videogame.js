const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {//unique id created
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

     released:{
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    }, 
    
    background_image:{
      type: DataTypes.STRING,
    },

    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    

  });
};
