import {ICategory} from 'store/categories/interfaces/categories.interface';

export const CATEGORIES_LOAD = 'CATEGORIES_LOAD';
export const CATEGORIES_SELECTED = 'CATEGORIES_SELECTED';

export type CategoriesLoad = {
  type: typeof CATEGORIES_LOAD;
  payload: ICategory[];
};
export type CategoriesSelected = {
  type: typeof CATEGORIES_SELECTED;
  payload: String;
};

export type CategoriesDispatchTypes = CategoriesLoad | CategoriesSelected;
