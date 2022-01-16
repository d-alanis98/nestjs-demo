import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//Entity
import { User, UserPrimitives } from './User';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>,
	) { }

	public findAll = async (): Promise<User[]> => {
		return this.usersRepository.find();
	}

	public findOne = async (uriUser: string): Promise<User> => {
		return await this.usersRepository.findOne(uriUser);
	}

	public create = async (user: UserPrimitives) => {
    	return await this.usersRepository.save(user);
	}

	public remove = async (uriUser: string): Promise<void> => {
		await this.usersRepository.delete(uriUser);
	}
}