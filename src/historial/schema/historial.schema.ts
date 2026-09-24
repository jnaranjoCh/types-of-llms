import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Tema } from "../../temas/schema/tema.schema";

export type HistorialDocument = HydratedDocument<Historial>;

@Schema()
export class Historial {

    @Prop({ default: '' })
    text: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Tema' })
    temId: Tema;

    @Prop({ required: true, type: Date, default: Date.now })
    dateCreated: Date;
}

export const HistorialSchema = SchemaFactory.createForClass(Historial);
