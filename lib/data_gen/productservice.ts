import {BaseService} from '../base/baseservice';
import {Product, ProductList, GetFilteredProductsParams} from './product.types';

class BackService extends BaseService<Product> {
  private static modelName = 'Product';
  private static fetchName = 'product';

  getModelName(): string {
    return BackService.modelName;
  }
  getFetchName(): string {
    return BackService.fetchName;
  }

  mapManyToOne(entity: Product): void {
    if (entity.productCategoryId) {
      entity.productCategory = `productCategory/${entity.productCategoryId}`;
    }
  }

  async getFilteredProducts(name: string): Promise<ProductList> {
    return this._fetchSearch<GetFilteredProductsParams>(
      'getFilteredProducts',
      {name},
      'ProdSubApp',
    );
  }

  async saveProduct(data: Product): Promise<any> {
    return this.save(data);
  }
}

class FrontService extends BaseService<Product> {
  getModelName(): string {
    throw new Error('Method not implemented.');
  }
  getFetchName(): string {
    throw new Error('Method not implemented.');
  }
  mapManyToOne(entity: Product): void {
    throw new Error('Method not implemented.');
  }
}

export default class ProductService {
  static BACK = new BackService();
  static FRONT = new FrontService();
}
