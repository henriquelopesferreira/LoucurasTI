// const { STRING } = require("sequelize");
// const Sequelize = require("sequelize");
// const Category = require("../categories/Category");
// const connection = require("../database/database");

// const Postagem = connection.define('postagem',{
//     title:{
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     slug:{
//         type: STRING,
//         allowNull: false
//     },
//     body:{
//         type: Sequelize.TEXT,
//         allowNull: false
//     }
// })

// Category.hasMany(Postagem);
// Postagem.belongsTo(Category);

//  //Postagem.sync({force:true});

// module.exports = Postagem;