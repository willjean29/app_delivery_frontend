import {
  IBusiness,
  ISubcategorie,
  IProduct,
  IProductsByCategory,
} from 'store/business/interfaces/business.interface';

export interface IBusinessState {
  businesses: IBusiness[];
  business: IBusiness | null;
  subcategories: ISubcategorie[];
  productsByCategory: IProductsByCategory[];
  products: IProduct[];
}
