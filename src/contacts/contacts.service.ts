import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contacts.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactsService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) {}

    // find all contacts, and return the object as a promise with an array of Contact[]
    async findAll(): Promise<Contact[]> {
        return await this.contactModel.find();
    }

    // find one contact, and return the object as a promise with an object of Contact
    async findOne(id: string): Promise<Contact>{
        return await this.contactModel.find({_id: id});
    }

    // create a contact, create a new mongoose model instance with the object Contact
    // return object on save();
    async create(contact: Contact): Promise<Contact>{
        const newItem = new this.contactModel(contact);
        return await newItem.save();
    }

}
