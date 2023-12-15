
import { Injectable } from '@nestjs/common';
import * as typeorm from 'typeorm';
import { UserEntity } from '../../entity/user.entity';


@Injectable()
export class UserService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  createUser(user: any) {
    const userRepo: typeorm.Repository<UserEntity> = typeorm.getRepository(UserEntity);
    const newUser = new UserEntity();
    newUser.username = user.username;
    newUser.password_hash = user.password_hash;
    newUser.email = user.email;
    newUser.created_at = user.created_at;
    return userRepo.save(newUser);
  }
}
