/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleAuthModule } from 'src/google-auth/google-auth.module';
import { TehTarikModule } from 'src/teh-tarik/teh-tarik.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [`.env.stage.${process.env.STAGE}`],
			validationSchema: configValidationSchema,
		}),
		TimeTrackerModule,
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				const isProduction = configService.get('STAGE') === 'prod';

				return {
					ssl: isProduction,
					extra: {
						ssl: isProduction ? { rejectUnauthorized: false } : null,
					},
					type: 'postgres',
					autoLoadEntities: true,
					synchronize: true,
					host: configService.get('DB_HOST'),
					port: configService.get('DB_PORT'),
					username: configService.get('DB_USERNAME'),
					password: configService.get('DB_PASSWORD'),
					database: configService.get('DB_DATABASE'),
				}
			}
		})],
    controllers: [],
    providers: [],
})
export class AppModule { }
