import api from 'api/api';
import {Dispatch} from 'redux';
import {
  CATEGORIES_LOAD,
  CATEGORIES_SELECTED,
  CategoriesDispatchTypes,
} from 'store/categories/categories.types';
import {ICategoriesResponse} from 'store/categories/interfaces/categories.interface';

export const categoriesLoad =
  () => async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
    try {
      const response = await api.get<ICategoriesResponse>('/categories');
      // console.log(response.data);
      dispatch({
        type: CATEGORIES_LOAD,
        payload: response.data.categories,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const categorieSelected =
  () => (dispatch: Dispatch<CategoriesDispatchTypes>) => {};
