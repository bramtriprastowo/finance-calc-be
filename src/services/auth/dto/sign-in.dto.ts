import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class SignInDto {
    @IsNotEmpty()
    @IsString()
    emailOrUsername: string

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    password: string
}