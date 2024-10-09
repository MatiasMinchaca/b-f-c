import { Document } from 'mongoose';
export declare class Product extends Document {
    productName: string;
    productPrice: number;
    productStock: number;
    restaurantId: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;