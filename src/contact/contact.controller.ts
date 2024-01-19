/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from 'src/schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private contactservice: ContactService) { }

    @Get()
    async getAllContacts(): Promise<Contact[]> {
        return this.contactservice.findAll();
    }

    @Post('newContact')
    async createContact(
        @Body()
        contact: CreateContactDto,
    ): Promise<Contact> {
        return this.contactservice.create(contact);
    }

    @Get(':id')
    async getContact(
        @Param('id')
        id: string
    ): Promise<Contact> {
        return this.contactservice.findById(id);
    }



    @Put(':id')
    async updateContact(
        @Param('id')
        id: string,
        @Body()
        contact: UpdateContactDto,
    ): Promise<Contact> {
        return this.contactservice.updateById(id, contact);
    }


    @Delete(':id')
    async deleteContact(
        @Param('id')
        id: string
    ): Promise<Contact> {
        return this.contactservice.deleteById(id);
    }


}
