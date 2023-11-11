import { PickType } from "@nestjs/swagger";
import { CreateUserDto } from "src/services/user/dto/create-user.dto";

export class VerifyUserDto extends PickType(CreateUserDto, ['isActive'] as const) {}