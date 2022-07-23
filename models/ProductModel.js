import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define(
  "products",
  {
    title: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.INTEGER,
    },
    id_user: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Products;
