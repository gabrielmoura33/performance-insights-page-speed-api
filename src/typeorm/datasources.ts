import { DataSource } from 'typeorm'
import { Action } from './entities/action'
const {
  DBAAS_MYSQL_DB_NAME,
  DBAAS_MYSQL_USER,
  DBAAS_MYSQL_PASSWORD,
  DBAAS_MYSQL_HOSTS,
} = process.env

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DBAAS_MYSQL_HOSTS,
  port: 3306,
  username: DBAAS_MYSQL_USER,
  password: DBAAS_MYSQL_PASSWORD,
  database: DBAAS_MYSQL_DB_NAME,
  logging: false,
  entities: [Action],
  migrations: [],
  subscribers: [],
})
