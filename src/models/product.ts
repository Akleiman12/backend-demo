import { ObjectId } from "mongodb"

//Modelo de un Producto
export interface Product {
    _id?: ObjectId,
    name?: string,
    inventory?: number,
    img?: string
}