import { HydratedDocument, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    name: string;

    username: string;

    @Prop({ required: true, type: Types.ObjectId, ref: 'Role' })
    roleId: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);