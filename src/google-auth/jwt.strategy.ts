/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './payload.interface';
import { GoogleUser } from './google-auth.entity';
import { GoogleAuthRepository } from './google-auth.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(GoogleAuthRepository)
        private googleAuthRepository: GoogleAuthRepository
    ) {
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    async validate(payload: JwtPayload): Promise<GoogleUser> {
        
        const { name } = payload;
        const user: GoogleUser = await this.googleAuthRepository.findOne({ name });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}