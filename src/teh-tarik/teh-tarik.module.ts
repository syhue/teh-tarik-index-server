/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleAuthModule } from 'src/google-auth/google-auth.module';
import { TehTarikController } from './teh-tarik.controller';
import { TehTarikRepository } from './teh-tarik.respository';
import { TehTarikService } from './teh-tarik.service';

@Module({
    imports: [
        GoogleAuthModule,
        TypeOrmModule.forFeature([TehTarikRepository])
    ],
    controllers: [TehTarikController],
    providers: [TehTarikService]
})
export class TehTarikModule { }