import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
import { Contact } from './interfaces/contacts.interface';

@Controller('contacts')
export class ContactsController {

    constructor(private readonly contactsService: ContactsService) {}
    // Get all contacts
    @Get()
    async findAll(): Promise<Contact[]> {
        return this.contactsService.findAll();
    }

    // Get one contact
    @Get(':id')
    async findOne(@Param('id') id): Promise<Contact> {
        return this.contactsService.findOne(id);
    }

    // Add a contact to the DB
    @Post()
    async create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
        return this.contactsService.create(createContactDto);
    }
}