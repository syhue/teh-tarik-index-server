/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TehTarikController } from './teh-tarik.controller';
import { TehTarikRepository } from './teh-tarik.respository';
import { TehTarikService } from './teh-tarik.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([TehTarikRepository])
    ],
    controllers: [TehTarikController],
    providers: [TehTarikService]
})
export class TehTarikModule { }