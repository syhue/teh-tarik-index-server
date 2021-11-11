/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTehTarikDto } from './dto/create-teh-tarik-dto';
import { TehTarik } from './teh-tarik.entity';
import { TehTarikRepository } from './teh-tarik.respository';

@Injectable()
export class TehTarikService {

    constructor(
        @InjectRepository(TehTarikRepository)
        private tehTarikRepository: TehTarikRepository
    ) { }

    createTehTarik(createTehTarikDto: CreateTehTarikDto): Promise<TehTarik> {
        return this.tehTarikRepository.createTehTarik(createTehTarikDto);
    }

    getLocation(): Promise<{ coordinateX: string, coordinateY: string }[]> {
        return this.tehTarikRepository.getLocation();
    }
}
