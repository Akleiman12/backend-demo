import { ObjectId } from "mongodb"

//Modelo de un Producto
export interface Product {
    _id?: ObjectId,
    name?: string,
    inventory?: number,
    price?: number,
    img?: string
}