import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { HydratedDocument } from "mongoose";

export type ActivityDocument = HydratedDocument<Activity>;

@Schema()
export class Activity{
    @Transform(({ value }) => value.toString())
    _id: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

    @Prop()
    url: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);