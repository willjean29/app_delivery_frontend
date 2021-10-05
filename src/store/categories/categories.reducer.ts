import {
  CATEGORIES_LOAD,
  CATEGORIES_SELECTED,
  CategoriesDispatchTypes,
} from 'store/categories/categories.types';
import {ICategoriesState} from 'store/categories//interfaces/categoriesState.interface';
const categoriesInitialState: ICategoriesState = {
  categories: [],
  categorieSelected: '',
};

const categoriesReducer = (
  state: ICategoriesState = categoriesInitialState,
  action: CategoriesDispatchTypes,
) => {
  switch (action.type) {
    case CATEGORIES_LOAD:
      return {
        ...state,
        categories: action.payload,
      };
    // case CATEGORIES_SELECTED:
    //   return {
    //     ...state,
    //     categorieSelected: action.payload,
    //   };
    default:
      return state;
  }
};

export default categoriesReducer;
