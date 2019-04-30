import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsService } from './contacts/contacts.service';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsController } from './contacts/contacts.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import config from './config/keys';

@Module({
  imports: [ContactsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ContactsController, AuthController],
  providers: [AppService, ContactsService, AuthService],
})

export class AppModule {}
