/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleAuthController } from './google-auth.controller';
import { GoogleAuthRepository } from './google-auth.repository';
import { GoogleAuthService } from './google-auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions: {
                expiresIn: 3600
            }
        }),
        TypeOrmModule.forFeature([GoogleAuthRepository])
    ],
    providers: [GoogleAuthService, JwtStrategy],
    controllers: [GoogleAuthController],
    exports: [JwtStrategy, PassportModule]
})
export class GoogleAuthModule { }
