import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "dotenv";


config()
/**
 * Database configuration.
 */
const configuration: TypeOrmModuleOptions = {
    type:           process.env.DB_CONNECTION ?? 'mysql',
    host:           process.env.DB_HOST ?? 'localhost',
    port:           process.env.DB_PORT ?? 3306,
    username:       process.env.DB_USERNAME ?? 'root',
    password:       process.env.DB_PASSWORD ?? 'root',
    database:       process.env.DB_DATABASE ?? 'app',
    synchronize:    true
};

export default configuration;