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
  IBusinessCategoriesResponse,
  IBusinessProductsResponse,
} from 'store/business/interfaces/business.interface';

export const businessGetInfo =
  (id: string) => async (dispatch: Dispatch<BusinessDispatchTypes>) => {
    try {
      const response = await api.get<IBusinessResponse>(`/business/${id}`);
      // console.log({data: response.data});
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
        payload: [
          ...data,
          ...data,
          ...data,
          // {
          //   _id: '6164ac63119a218ac642b09f',
          //   name: 'Bodega Sinche',
          //   user: '6164a6d4119a218ac642b069',
          //   categorie: '6164aae0119a218ac642b078',
          //   location: {
          //     latitude: -12.160740246618587,
          //     longitude: -76.95958809927106,
          //     _id: '6164ac63119a218ac642b0a0',
          //   },
          //   address: 'Bernardino Romero 930, Distrito de Lima 15801',
          //   phone: '926594773',
          //   background:
          //     'https://res-2.cloudinary.com/dostuff-media/image/upload//w_1200,q_75,c_limit,f_auto/v1554713925/page-image-13314-c7361c59-5d1b-4fcf-a04e-5b7c5afede10.jpg',
          //   rating: 0,
          //   __v: 0,
          // },
        ],
      });
    } catch (error) {
      console.log({error});
    }
  };

export const businessGetSubcategories =
  (id: string) => async (dispatch: Dispatch<BusinessDispatchTypes>) => {
    try {
      const response = await api.get<IBusinessCategoriesResponse>(
        `/subcategories/${id}`,
      );
      const subcategories = response.data.subcategories.map(
        item => item.subcategorie,
      );
      // console.log(JSON.stringify({subcategories}, null, 3));
      dispatch({
        type: BUSINESS_GET_CATEGORIES,
        payload: subcategories,
      });
    } catch (error) {
      console.log({error});
    }
  };

export const businessGetProducts =
  (id: string) => async (dispatch: Dispatch<BusinessDispatchTypes>) => {
    console.log('obtener productos');
    try {
      const response = await api.get<IBusinessProductsResponse>(
        `/products/${id}`,
      );

      dispatch({
        type: BUSINESS_GET_ALL_PRODUCTS,
        payload: response.data.products,
      });
    } catch (error) {
      console.log({error});
    }
  };
