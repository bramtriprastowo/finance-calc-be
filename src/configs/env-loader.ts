import * as dotenv from 'dotenv';
dotenv.config();

export const Env = () => ({
    // Database
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    // JWT
    PRIVATE_KEY_FILE: process.env.PRIVATE_KEY_FILE,
    PUBLIC_KEY_FILE: process.env.PUBLIC_KEY_FILE,
})