import { OrdersService } from './orders.service';
import { Order } from './order.schema';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(order: Partial<Order>): Promise<Order>;
    findAll(): Promise<Order[]>;
    findById(id: string): Promise<Order>;
}
