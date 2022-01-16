import { Controller, Get } from '@nestjs/common';
import { UserPrimitives } from './User';
//Service
import { UsersService } from './UsersService';


@Controller()
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Get('users/create')
	async createUser(): Promise<UserPrimitives> {
		const user = await this.usersService.create({
			uri_user: Math.random().toString(36).substring(2,25),
			name: Math.random().toString(36).substring(2,25),
			lastname: Math.random().toString(36).substring(2,25),
			email: `${ Math.random().toString(36).substring(2,15) }@${ Math.random().toString(36).substring(2,5) }`
		});

		return user;
	}
}