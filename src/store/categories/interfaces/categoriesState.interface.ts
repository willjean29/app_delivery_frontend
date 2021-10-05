import {ICategory} from 'store/categories/interfaces/categories.interface';

export interface ICategoriesState {
  categories: ICategory[];
  categorieSelected: string;
}
