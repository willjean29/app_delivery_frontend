import {IBusinessState} from 'store/business/interfaces/businessState.interface';
import {
  BUSINESS_GET_ALL_PRODUCTS,
  BUSINESS_GET_BY_ID,
  BUSINESS_GET_CATEGORIES,
  BUSINESS_GET_ALL,
  BusinessDispatchTypes,
} from 'store/business/business.types';
const businessinitialState: IBusinessState = {
  business: null,
  categories: [],
  products: [],
  businesses: [],
};

const businessReducer = (
  state: IBusinessState = businessinitialState,
  action: BusinessDispatchTypes,
) => {
  switch (action.type) {
    case BUSINESS_GET_ALL:
      return {
        ...state,
        businesses: action.payload,
      };
    case BUSINESS_GET_BY_ID:
      return {
        ...state,
        business: action.payload,
      };
    case BUSINESS_GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case BUSINESS_GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default businessReducer;
