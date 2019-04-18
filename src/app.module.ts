import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsService } from './contacts/contacts.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService, ContactsService],
})

export class AppModule {}
