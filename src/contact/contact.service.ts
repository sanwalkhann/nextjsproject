/* eslint-disable prettier/prettier */

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Contact } from 'src/schemas/contact.schema';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name)
    private contactModel: mongoose.Model<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    const contacts = await this.contactModel.find();
    return contacts;
  }

  async create(contact: Contact): Promise<Contact> {

    const existingContact = await this.contactModel.findOne({
      number: contact.number,
    });

    if (existingContact) {
      throw new HttpException(
        'Phone number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    
    const createdContact = await this.contactModel.create(contact);

    const plainContact = createdContact.toObject();

    return plainContact;
  }

  async findById(id: string): Promise<Contact> {
    const contact = await this.contactModel.findById(id);
    if (!contact) {
      throw new NotFoundException('Contact Not Found');
    }
    return contact;
  }

  async updateById(id: string, contact: Contact): Promise<Contact> {
    return await this.contactModel.findByIdAndUpdate(id, contact, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Contact> {
    return await this.contactModel.findByIdAndDelete(id);
  }
}
