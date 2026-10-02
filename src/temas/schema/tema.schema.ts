import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type TemaDocument = HydratedDocument<Tema>;

@Schema()
export class Tema {

    @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
    userId: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Agent' })
    agentJudgeId: Types.ObjectId;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Agent' })
    agentCriticId: Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true, type: Date, default: Date.now })
    dateCreated: Date;
}

export const TemaSchema = SchemaFactory.createForClass(Tema);