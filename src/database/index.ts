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
        const mc = await MongoClient.connect('mongodb://dbuser:gold179@ds259912.mlab.com:59912/sctdb',{ useNewUrlParser: true });
        this.mongo = mc.db('sctdb');
        this.Product = this.mongo.collection<Product>('product');
        console.log("Mongo Ready!")

    }
}