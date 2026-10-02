import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tema, TemaDocument } from './schema/tema.schema';
import { Model, Types } from 'mongoose';
import { Historial } from '../historial/schema/historial.schema';

@Injectable()
export class TemasService {

  constructor(@InjectModel(Tema.name) private temaModel: Model<TemaDocument>,
              @InjectModel(Historial.name) private historialModel: Model<Historial>) {}

  async findAllByUser(userId: string) {

    return this.temaModel.find({
      userId: new Types.ObjectId(userId),
    }).sort({ dateCreated: -1 }).exec();
  }

  async remove(id: string) {

    await this.historialModel.deleteMany({ temId: new Types.ObjectId(id) }).exec();

    return this.temaModel.findByIdAndDelete(id).exec();
  }
}
