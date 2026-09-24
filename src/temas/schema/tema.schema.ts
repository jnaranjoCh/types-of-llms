import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { User } from "../../user/schema/user.schema";
import { Agent } from "../../agent/schema/agent.schema";

export type TemaDocument = HydratedDocument<Tema>;

@Schema()
export class Tema {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: User;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Agent' })
    agentJudgeId: Agent;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Agent' })
    agentCriticId: Agent;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true, type: Date, default: Date.now })
    dateCreated: Date;
}

export const TemaSchema = SchemaFactory.createForClass(Tema);