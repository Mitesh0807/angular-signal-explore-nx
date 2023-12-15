import { Controller, Get, Post } from '@nestjs/common';


@Controller('user')
export class UserController {
  @Get()
  getData() {
    return { message: 'Hello API' };
  }

  @Post()
  postData(user: any) {
    return { message: 'Hello API' };
  }
}
