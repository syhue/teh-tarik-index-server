/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateTehTarikDto {
    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    coordinateX: string;

    @IsNotEmpty()
    coordinateY: string;

    @IsNotEmpty()
    ipAddress: string;

    @IsNotEmpty()
    userId: string;
}