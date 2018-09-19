import {
    Product
} from '../models';
import { Collection, MongoClient, Db } from 'mongodb';


//Clase para la defincion y conexion con la BDD en Mongo
//Con un Objeto de esta Clase podemos interactuar con Mongo
export class Database {

    mongo: Db
    Product: Collection<Product>


    constructor(){
        this.connectMongo();
    }

    async connectMongo(): Promise<any>{
        const mc = await MongoClient.connect('mongodb://localhost:27017/db',{ useNewUrlParser: true });
        this.mongo = mc.db('db');
        this.Product = this.mongo.collection<Product>('product');
        console.log("Mongo Ready!")

    }
}