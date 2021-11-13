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
    locationName: string;

    @IsNotEmpty()
    userId: string;
}