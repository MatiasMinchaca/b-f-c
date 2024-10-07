import { Document, Types } from 'mongoose';
import { Product } from '../products/product.schema';
export type OrderDocument = Order & Document;
export declare class Order {
    products: {
        product: Types.ObjectId | Product;
        quantity: number;
    }[];
    status: string;
    createdAt: Date;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}>;
