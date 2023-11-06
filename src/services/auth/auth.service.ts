import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { userService } from "../user/user.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtPayload } from "./jwt/jwt.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: userService,
    ) { }

    async signUp(signUpDto: SignUpDto) {
        const { email, username } = signUpDto;
        const isEmailExists = await this.userService.findByEmail(email);
        const isUsernameExists = await this.userService.findByUsername(username);

        if (isEmailExists && isUsernameExists) {
            throw new HttpException('This email AND username is already used!', HttpStatus.CONFLICT);
        } else if (isEmailExists) {
            throw new HttpException('This email is already used!', HttpStatus.CONFLICT);
        } else if (isUsernameExists) {
            throw new HttpException('This username is already used!', HttpStatus.CONFLICT);
        }

        return this.userService.create({
            ...signUpDto,
            balance: 0,
            isActive: false
        });
    }

    async signIn(signInDto: SignInDto) {
        const {emailOrUsername, password} = signInDto;
        const user = await this.userService.findByEmailOrUsername(emailOrUsername);
        if(!user) {
            throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            throw new HttpException('Wrong password!', HttpStatus.UNAUTHORIZED);
        }
        delete user.password;
        const payload: JwtPayload = {
            id: user.id
        }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}