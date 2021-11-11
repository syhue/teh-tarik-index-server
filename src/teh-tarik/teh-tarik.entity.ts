/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TehTarik {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    coordinateX: string;

    @Column('float')
    coordinateY: string;

    @Column('float')
    price: string;

    @Column()
    ipAddress: string;

    @Column()
    userId: string;
}