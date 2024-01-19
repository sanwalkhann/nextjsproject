/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export enum Category {
    PERSONAL = "PERSONAL",
    HOME = "HOME",
    OFFICE = "OFFICE"

}



@Schema({
    timestamps: true,
})


export class Contact {
    @Prop()
    name: string;

    @Prop()
    number: number;

    @Prop()
    category: Category
}


export const ContactSchema = SchemaFactory.createForClass(Contact)