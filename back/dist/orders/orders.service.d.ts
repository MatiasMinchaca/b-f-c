import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<OrderDocument>);
    create(order: Partial<Order>): Promise<Order>;
    findAll(): Promise<Order[]>;
    findById(id: string): Promise<Order>;
}
