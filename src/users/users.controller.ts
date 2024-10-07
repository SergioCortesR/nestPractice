import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/api/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/api/users')
    createUser(@Body() user: createUserDto) {
        return this.usersService.createUser(user);
    }
}
