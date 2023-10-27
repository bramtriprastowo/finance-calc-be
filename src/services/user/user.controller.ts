import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { userService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userService: userService) { }
    @Get()
    async findByEmailOrUsername(@Query('user') emailOrUsername: string) {
        return this.userService.findByEmailOrUsername(emailOrUsername);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    // @Get(':id')
    // async isActive(@Param('id') id: string){
    //     return this.userService.updateIsActiveById(id);
    // }

    @Delete(':id')
    async remove(@Param('id') id: string){
        return this.userService.removeById(id);
    }
}