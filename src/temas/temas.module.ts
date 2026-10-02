import { Module } from '@nestjs/common';
import { TemasService } from './temas.service';
import { TemasController } from './temas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TemaSchema } from './schema/tema.schema';
import { HistorialModule } from '../historial/historial.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tema', schema: TemaSchema }]),
    HistorialModule,
  ],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
