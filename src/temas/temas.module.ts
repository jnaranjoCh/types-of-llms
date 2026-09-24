import { Module } from '@nestjs/common';
import { TemasService } from './temas.service';
import { TemasController } from './temas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TemaSchema } from './schema/tema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tema', schema: TemaSchema }])
  ],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
