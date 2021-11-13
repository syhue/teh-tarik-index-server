/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GoogleUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column({ unique: true })
    @Column()
    email: string;

    @Column()
    name: string;

    // @Column({ unique: true })
    @Column()
    link: string;

}