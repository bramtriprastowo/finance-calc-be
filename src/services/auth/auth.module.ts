import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { privateKey, publicKey } from "src/utils/keys";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            privateKey: privateKey,
            publicKey: publicKey,
            signOptions: {
                expiresIn: '1d',
                algorithm: 'RS256',
            },
        }),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}