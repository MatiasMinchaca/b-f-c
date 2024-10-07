import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(order: Partial<Order>): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async findAll(): Promise<Order[]> {
    // Asegúrate de que 'products.product' se refiere al nombre correcto del modelo de Producto
    return this.orderModel
      .find()
      .populate('products.product', 'name price')
      .exec();
    // Aquí estamos populando los campos 'name' y 'price' del producto.
  }

  async findById(id: string): Promise<Order> {
    const order = await this.orderModel
      .findById(id)
      .populate('products.product', 'name price')
      .exec();
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }
}
