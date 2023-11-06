import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class userService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) { }

	async create(createUserDto: CreateUserDto) {
		const { email, password, username, balance, isActive } = createUserDto;
		const newUser = new User();
		newUser.email = email;
		newUser.password = bcrypt.hashSync(password, 12);
		newUser.username = username;
		newUser.balance = balance;
		newUser.isActive = isActive;
		return this.userRepository.save(newUser);
	}

	async findAll() {
		return this.userRepository.find();
	}

	async findByEmail(email: string) {
		return this.userRepository.findOneBy({ email: email });
	}

	async findByUsername(username: string) {
		return this.userRepository.findOneBy({ username: username });
	}

	async findByEmailOrUsername(emailOrUsername: string) {
		return this.userRepository.findOne({
			where: [
				{ email: emailOrUsername },
				{ username: emailOrUsername }
			]
		});
	}

	async updateIsActiveById(id: string, updateUserDto: UpdateUserDto) {
		return this.userRepository.update({
			id: id
		}, updateUserDto);
	}

	async removeById(id: string) {
		return this.userRepository.delete(id);
	}
}