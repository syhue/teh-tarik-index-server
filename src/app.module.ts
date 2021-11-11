/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TehTarikModule } from 'src/teh-tarik/teh-tarik.module';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '5288hue',
        database: 'teh-tarik-index',
        autoLoadEntities: true,
        synchronize: true,
    }),
        TehTarikModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
