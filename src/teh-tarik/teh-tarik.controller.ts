/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTehTarikDto } from './dto/create-teh-tarik-dto';
import { TehTarik } from './teh-tarik.entity';
import { TehTarikService } from './teh-tarik.service';

@Controller('teh-tarik')
// @UseGuards(AuthGuard()) // protecting the entire route
export class TehTarikController {

    constructor(private tehTarikService: TehTarikService) { }

    @Post()
    createTehTarik(
        @Body() createTehTarikDto: CreateTehTarikDto,
    ): Promise<TehTarik> {
        return this.tehTarikService.createTehTarik(createTehTarikDto);
    }

    @Get()
    getLocation(
    ): Promise<{ coordinateX: string, coordinateY: string }[]> {
        return this.tehTarikService.getLocation();
    }
}
