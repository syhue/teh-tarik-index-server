/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GoogleAuthCredentialsDto } from './dto/google-auth-credentials.dto';
import { GoogleUser } from './google-auth.entity';
import { GoogleAuthService } from './google-auth.service';

@Controller('google-auth')
export class GoogleAuthController {

    constructor(
        private googleAuthService: GoogleAuthService
    ) { }

    @Post('/signin')
    signIn(@Body() googleAuthCredentialsDto: GoogleAuthCredentialsDto): Promise<{ status: boolean }> {
        return this.googleAuthService.signIn(googleAuthCredentialsDto);
    }

    @Get()
    getUser(@Query() email: { email: string}): Promise<GoogleUser> {
        return this.googleAuthService.getUser(email.email);
    }
}
