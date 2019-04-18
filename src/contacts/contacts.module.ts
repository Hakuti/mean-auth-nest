import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './schemas/contacts.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Contact', schema: ContactSchema}])],
    controllers: [ContactsController],
    providers: [ContactsService],
})

export class ContactsModule {}