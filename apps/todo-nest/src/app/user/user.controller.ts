import { Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from '../../entity/user.entity';


@Controller('user')
export class UserController {
  @Get()
  async getData() {

    let dummy_user = {
      username: 'dummy',
      password_hash: 'dummy',
      email: 'dummy',
      created_at: new Date(),
    }
    // make user to db
    let user = new UserEntity();
    user.username = dummy_user.username;
    user.password_hash = dummy_user.password_hash;
    user.email = dummy_user.email;
    user.created_at = dummy_user.created_at;
    console.log(user, "user ");
    user.user_id = 1;
    // store to db
    await user.save();
    return { message: 'Hello API' };
  }

  @Post()
  postData(user: any) {
    return { message: 'Hello API' };
  }
}
