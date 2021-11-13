import { IsString } from "class-validator";

export class GoogleAuthCredentialsDto {
    @IsString()
    email: string;

    @IsString()
    name: string;

    @IsString()
    link: string;
}