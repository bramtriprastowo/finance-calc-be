import { OmitType } from "@nestjs/swagger";
import { CreateUserDto } from "src/services/user/dto/create-user.dto";

export class SignUpDto extends OmitType(CreateUserDto, ['balance', 'isActive'] as const) {}