import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
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
}
