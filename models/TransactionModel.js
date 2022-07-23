import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transactions = db.define(
  "transactions",
  {
    id_product: {
      type: DataTypes.STRING,
    },
    id_user: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    payment_method: {
      type: DataTypes.STRING,
    },
    nominal_transaction: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transactions;
