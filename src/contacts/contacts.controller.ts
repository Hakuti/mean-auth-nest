import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
import { Contact } from './interfaces/contacts.interface';

@Controller('contacts')
export class ContactsController {

    constructor(private readonly contactsService: ContactsService) {}
    @Get()
    async findAll(): Promise<Contact[]>{
        return this.contactsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Contact> {
        return this.contactsService.findOne(id);
    }
}