import { ProductsService } from './products.service';
import { Product } from './product.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<Product>;
}
