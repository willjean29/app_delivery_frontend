import api from 'api/api';
import {Dispatch} from 'redux';
import {
  BUSINESS_GET_ALL_PRODUCTS,
  BUSINESS_GET_BY_ID,
  BUSINESS_GET_CATEGORIES,
  BUSINESS_GET_ALL,
  BusinessDispatchTypes,
} from 'store/business/business.types';
import {
  IBusinessResponse,
  IBusinessAllResponse,
} from 'store/business/interfaces/business.interface';

export const businessGetInfo =
  (id: string) => async (dispatch: Dispatch<BusinessDispatchTypes>) => {
    try {
      const response = await api.get<IBusinessResponse>(`/business/${id}`);
      console.log({data: response.data});
      dispatch({
        type: BUSINESS_GET_BY_ID,
        payload: response.data.business,
      });
    } catch (error) {
      console.log({error});
    }
  };

export const businessGetAll =
  () => async (dispatch: Dispatch<BusinessDispatchTypes>) => {
    try {
      const response = await api.get<IBusinessAllResponse>('/business');
      const data = response.data.business;
      dispatch({
        type: BUSINESS_GET_ALL,
        payload: [...data, ...data, ...data],
      });
    } catch (error) {
      console.log({error});
    }
  };
