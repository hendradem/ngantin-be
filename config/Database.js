import { Sequelize } from "sequelize";

const host = "localhost";
const port = 5432;
const user = "postgres";
const pass = "root";
const database = "ngantin";

const db = new Sequelize(database, user, pass, {
  host: host,
  dialect: "postgres",
});

export default db;
