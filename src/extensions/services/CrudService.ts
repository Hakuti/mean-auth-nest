import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// This file serves as abstract class to extend the model class from Mongoose
// Used in order to serve some basic mongoose queries
// i.e find, findById, remove, update, etc.

export class CrudService<T extends Model> {
    protected model: Model<T>;

    public async findAll(): Promise<T[]> {
        return await this.model.find();
    }

    public async findOne(id: string): Promise<T>{
        return await this.model.find({_id: id});
    }

    public async create(interfaceObject: T): Promise<T> {
        // creates a new instance of model with the passed interface
        // saves it to the DB
        const newItem = new this.model(interfaceObject);
        return await newItem.save();
    }

    public async delete(id: string): Promise<T> {
        return await this.model.findByIdAndRemove(id);
    }

}
