import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contacts.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ContactsService {
    constructor(@InjectModel('Contact') private readonly contactModel: Model<Contact>) {}

    async findAll(): Promise<Contact[]> {
        return await this.contactModel.find();
    }

    async findOne(id: string): Promise<Contact>{
        return await this.contactModel.find({_id: id});
    }

}
