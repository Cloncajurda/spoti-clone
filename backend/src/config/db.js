import { Sequelize } from "sequelize";

const database = 'progcodoacodo'
const username = 'root'
const password = ''
const host = 'localhost'

export const sequelize = new Sequelize(
  database, username, password, {
  host,
  dialect: 'mysql',
}
)

export async function connectToDataBase() {
  try {
    await sequelize.authenticate()
    console.log("Succesess connect to database")
  } catch (error) {
    console.log(error)
  }
}