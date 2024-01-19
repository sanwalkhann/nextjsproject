/* eslint-disable prettier/prettier */



import { Category } from '../../schemas/contact.schema';



export class CreateContactDto{
    readonly name: string;
    readonly number: number;
    readonly category: Category;
}