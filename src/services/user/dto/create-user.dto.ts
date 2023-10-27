import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(32)
    password: string

    @IsNotEmpty()
    @IsString()
    username: string

    @IsNotEmpty()
    @IsNumber()
    balance: number

    @IsNotEmpty()
    @IsBoolean()
    isActive: boolean

}