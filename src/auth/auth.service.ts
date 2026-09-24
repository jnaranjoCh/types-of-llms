import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService
    ) {}

    async signIn(user: UserDto) {

        const foundUser = await this.userService.findOneByEmail(user.email);

        if (foundUser === null) {
            throw new Error('User not found');
        }

        const { password, _id, ...userFind } = foundUser;
        
        if (password !== user.password) {
            throw new UnauthorizedException();
        }

        const payload = { email: userFind.email, sub: _id };
        const token = await this.jwtService.signAsync(payload);

        return {
            idUser: _id,
            ...userFind,
            token
        };
    }
}
