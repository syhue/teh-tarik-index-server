/* eslint-disable prettier/prettier */
import { NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { GoogleAuthCredentialsDto } from "./dto/google-auth-credentials.dto";
import { GoogleUser } from "./google-auth.entity";

@EntityRepository(GoogleUser)
export class GoogleAuthRepository extends Repository<GoogleUser> {

    async storeUser(authCredentialsDto: GoogleAuthCredentialsDto): Promise<{ status: true }> {

        await this.save(authCredentialsDto);

        return {
            status: true
        };
    }

    async getUser(email: string): Promise<GoogleUser> {

        const found = await this.findOne({ where: { email } });

        if (!found) throw new NotFoundException(`User with email ${email} not found`);

        else return found;
    }
}