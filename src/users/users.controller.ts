import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/api/users')
    getUsers() {
        return this.usersService.getUsers();
    }
}
