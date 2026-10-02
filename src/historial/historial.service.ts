import { Injectable } from '@nestjs/common';
import { HistorialDto } from './dto/historial.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Historial } from './schema/historial.schema';
import { Model } from 'mongoose';

@Injectable()
export class HistorialService {

    constructor(@InjectModel(Historial.name) private readonly historialModel: Model<Historial>) {}
  
    async getHistorialByidTema(idTema: string) {
        return this.historialModel.find({ idTema }).limit(10).sort({ dateCreated: -1 }).exec();
    }

    async createHistorial(createHistorialDto: HistorialDto) {
        
        const historial = new this.historialModel(createHistorialDto);
        return historial.save();
    }

    async remove(id: string) {
        return this.historialModel.findByIdAndDelete(id);
    }
}
