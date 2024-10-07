import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Product } from '../products/product.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({
    type: [
      {
        product: { type: Types.ObjectId, ref: Product.name },
        quantity: Number,
      },
    ],
  })
  products: { product: Types.ObjectId | Product; quantity: number }[];

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
