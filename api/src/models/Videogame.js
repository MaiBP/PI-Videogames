const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {//creamos el id unico. 
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

    //  addedVideoGame: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    //   defaultValue: true,
    // }
   
  });
};




// Base de datos
// El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

// [ ] Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción *
// Fecha de lanzamiento
// Rating
// Plataformas *

//--- AGREGUE BACKROUND IMAGE Y EL VIDEOGAME CREADO