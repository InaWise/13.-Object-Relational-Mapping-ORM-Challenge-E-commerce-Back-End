// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init( 
  {
    //define colums//
// define id columns
id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primarykey: true,
  autoIncrement: true
},
//define product_name
product_name: {
  type: DataTypes.STRING,
  allowNULL: false
},
//define price column//
price: {
  type: DataTypes.DECIMAL(10,2),
  allowNull: false,
  validate: false,
  validate: {
    isDecimal: true
    }
  },
//define stock column//
stock: {
  type:DataTypes.INTEGER,
  allowNull: false,
  defaultValue: 10,
  validate: {
    isNumeric: true
  }
},
//define Category_id column//
category_id: {
  type: DataTypes.INTEGER,
  references: {
    model:"category",
    key: "id"
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
