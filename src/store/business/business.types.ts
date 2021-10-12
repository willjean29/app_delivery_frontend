import {
  IBusiness,
  IProduct,
  ISubcategorie,
} from 'store/business/interfaces/business.interface';

export const BUSINESS_GET_BY_ID = 'BUSINESS_GET_BY_ID';
export const BUSINESS_GET_ALL = 'BUSINESS_GET_ALL';
export const BUSINESS_GET_CATEGORIES = 'BUSINESS_GET_CATEGORIES';
export const BUSINESS_GET_ALL_PRODUCTS = 'BUSINESS_GET_ALL_PRODUCTS';

export type BusinessGetAll = {
  type: typeof BUSINESS_GET_ALL;
  payload: IBusiness[];
};

export type BusinessGetById = {
  type: typeof BUSINESS_GET_BY_ID;
  payload: IBusiness;
};

export type BusinessGetCategories = {
  type: typeof BUSINESS_GET_CATEGORIES;
  payload: ISubcategorie[];
};

export type BusinessGetAllProducts = {
  type: typeof BUSINESS_GET_ALL_PRODUCTS;
  payload: IProduct[];
};

export type BusinessDispatchTypes =
  | BusinessGetAll
  | BusinessGetById
  | BusinessGetCategories
  | BusinessGetAllProducts;
