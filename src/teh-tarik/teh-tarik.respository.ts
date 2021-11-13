/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { CreateTehTarikDto } from "./dto/create-teh-tarik-dto";
import { TehTarik } from "./teh-tarik.entity";

@EntityRepository(TehTarik)
export class TehTarikRepository extends Repository<TehTarik> {

    async createTehTarik(createTehTarikDto: CreateTehTarikDto): Promise<TehTarik> {

        const { price, coordinateX, coordinateY, locationName, userId } = createTehTarikDto;
        
        const tehTarik = this.create({ price, coordinateX, coordinateY, locationName, userId });

        await this.save(tehTarik);

        return tehTarik;
    }

    
    async getLocation(): Promise<{ coordinateX: string, coordinateY: string }[]> {

        const query = this.createQueryBuilder('teh-tarik');

        const tehTarik = await query.getMany();

        return tehTarik.map(d => {
            return {
                coordinateX: d.coordinateX,
                coordinateY: d.coordinateY,
                locationName: d.locationName,
                price: d.price
            }
        });
    }
}
