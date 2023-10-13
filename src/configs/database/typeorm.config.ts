import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Env } from "../env-loader";


const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} = Env();
const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ['dist/**/*.entity{.ts, .js}'],
    synchronize: true, // in development true --> Indicates if database schema should be auto created on every application launch
    dropSchema: false, // Drops the schema each time data source is being initialized
    logging: true,
}

export default typeOrmConfig;