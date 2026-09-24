import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AgentDocument = HydratedDocument<Agent>;

export class Agent {

    name: string;

    company: string;

    @Prop({ required: true, default: true })
    judge: boolean;

    @Prop({ required: true, default: true })
    critic: boolean;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);