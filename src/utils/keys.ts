import * as fs from "fs";
import { Env } from "src/configs/env-loader";

const { PRIVATE_KEY_FILE, PUBLIC_KEY_FILE } = Env();

export const privateKey = fs.readFileSync(PRIVATE_KEY_FILE);
export const publicKey = fs.readFileSync(PUBLIC_KEY_FILE);