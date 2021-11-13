/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class GetLocationDto {
    @IsNotEmpty()
    coordinateX: string;

    @IsNotEmpty()
    coordinateY: string;
    
    @IsNotEmpty()
    locationName: string;
}