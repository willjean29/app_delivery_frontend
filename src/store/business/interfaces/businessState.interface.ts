import {
  IBusiness,
  ISubcategorie,
  IProduct,
} from 'store/business/interfaces/business.interface';

export interface IBusinessState {
  businesses: IBusiness[];
  business: IBusiness | null;
  categories: ISubcategorie[];
  products: IProduct[];
}
