import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users : any = [
        {
            id: 1,
            name: 'John Does',
            email: 'john.doe@example.com'
        }, {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com'
        }
    ];

    getUsers = () => this.users;  // Función flecha

    createUser(user: createUserDto){
        this.users.push(user);  
        return {
            ...user,
            id: this.users.length + 1
        }
    }
}
