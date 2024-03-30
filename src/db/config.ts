import { Dialect, Sequelize } from 'sequelize'

const dbName = "postgres" //process.env.DB_NAME as string
const dbUser = "postgres" //process.env.DB_USER as string
const dbPort = 35000
const dbHost = "localhost" // process.env.DB_HOST
const dbDriver = "postgres"  //process.env.DB_DRIVER as Dialect
const dbPassword = "postgres"//process.env.DB_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port:dbPort,
  logging:false
})

export default sequelizeConnection