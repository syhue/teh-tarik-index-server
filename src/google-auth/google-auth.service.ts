/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoogleAuthCredentialsDto } from './dto/google-auth-credentials.dto';
import { GoogleUser } from './google-auth.entity';
import { GoogleAuthRepository } from './google-auth.repository';

@Injectable()
export class GoogleAuthService {

    constructor(
        @InjectRepository(GoogleAuthRepository)
        private googleAuthRespository: GoogleAuthRepository
    ) { }

    async signIn(authCredentialsDto: GoogleAuthCredentialsDto): Promise<{ status: boolean }> {
        return this.googleAuthRespository.storeUser(authCredentialsDto);
    }

    async getUser(email: string): Promise<GoogleUser> {
        console.log(email);
        return this.googleAuthRespository.getUser(email);
    }
}
