import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
}
