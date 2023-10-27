import { Injectable } from "@nestjs/common";
import { userService } from "../user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: userService,
    ) {}

    async signUp() {
        
    }
}