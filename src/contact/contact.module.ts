/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';

import { ContactController } from './contact.controller';


import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from 'src/schemas/contact.schema';
import { ContactService } from './contact.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }])],
  controllers: [ContactController],
  providers: [ContactService],    
  
})
export class ContactModule { }
