import { Sequelize } from "sequelize";

const host = "ec2-107-22-122-106.compute-1.amazonaws.com";
const port = 5432;
const user = "uvocixkjxbqgga";
const pass = "81a1d2a334b947529eb8fa94d2f2b018a4662c3c27e0b1a21361fa771ae50710";
const database = "df4vmkb94m9vpk";

const db = new Sequelize(database, user, pass, {
  host: host,
  dialect: "postgres",
});

export default db;
