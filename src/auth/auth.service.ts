import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Injectable } from '@nestjs/common';
import { CrudService } from '../extensions/services/CrudService';
import { User } from './user/interfaces/users.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AuthService extends CrudService<User> {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        // @InjectModel('User') private readonly model
        private readonly jwtService: JwtService,
    ) {
        super();

    }

    async createToken() {
        const user: JwtPayload = { email: 'test@email.com' };
        const accessToken = this.jwtService.sign(user);
        return {
          expiresIn: 3600,
          accessToken,
        };
    }
    async signIn(): Promise<string> {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        const user: JwtPayload = { email: 'user@email.com' };
        return this.jwtService.sign(user);
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.findOne('1');
    }
}
