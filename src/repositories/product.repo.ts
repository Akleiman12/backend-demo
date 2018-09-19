import { Database } from '../database'
import { Product } from '../models';
import { ObjectId } from 'mongodb'



//Clase proveedora de funciones para interacciones con la BDD en Mongo
export class ProductRepo{

    private db;

    constructor(){
        this.db = new Database()
    }

    async get(params: Product): Promise<Product[]>{
        return await this.db.Product.find(params).toArray()
    }

    async getOne(id: string): Promise<Product>{
        return await this.db.Product.findOne({'_id': new ObjectId(id)})
    }

    async getAll(): Promise<Product[]>{
        return await this.db.Product.find().toArray()
    }

    async create(input: Product): Promise<Product | null>{
        let inserted = await this.db.Product.insertOne(input)
        if(inserted && inserted.insertedId){
            return await this.db.Product.findOne({'_id': inserted.insertedId})
        }else{
            return null
        }
    }

    async edit(id: string, input: Product): Promise<Product | null>{
        let updated = await this.db.Product.updateOne({'_id': new ObjectId(id)},{ $set: input })
        if(updated && updated.matchedCount === 1){
            return await this.db.Product.findOne({'_id': new ObjectId(id)});
        }
        else{
            return null
        }
    }

    async delete(id: string): Promise<Product | null>{
        let toDelete = await this.db.Product.findOne({'_id': new ObjectId(id)});
        if (toDelete && toDelete._id){
            this.db.Product.deleteOne({'_id': new ObjectId(toDelete._id)});
            return toDelete;
        }
        else{
            return null;
        }
    }

    
}