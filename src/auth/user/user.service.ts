import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/extensions/services/CrudService';
import { User } from './interfaces/users.interface';

@Injectable()
export class UserService extends CrudService<User> {
    constructor() {
        super();
    }
}
