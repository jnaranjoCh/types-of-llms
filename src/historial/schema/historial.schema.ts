import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type HistorialDocument = HydratedDocument<Historial>;

@Schema()
export class Historial {

    @Prop({ default: '' })
    text: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Tema' })
    idTema: Types.ObjectId;

    @Prop({ required: true, type: Date, default: Date.now })
    dateCreated: Date;

    @Prop({ required: true })
    isJudge: boolean;
}

export const HistorialSchema = SchemaFactory.createForClass(Historial);
