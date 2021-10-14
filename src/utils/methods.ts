import axios from 'axios';
import {Location} from 'utils/types';
import {IGeocodingReverse} from 'utils/interfaces';
import {
  IProduct,
  IProductsByCategory,
  ISubcategorie,
} from 'store/business/interfaces/business.interface';

export const getInfoCoordinates = async (location: Location) => {
  const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCrA4Xq6af2XjoUjk84kCtm38fy3X9Nxng`;
  const response = await axios.get<IGeocodingReverse>(urlGeocoding);
  return response.data.results[0].formatted_address;
};

export const groupByCategory = (
  categories: ISubcategorie[],
  products: IProduct[],
) => {
  const productsCategory: IProductsByCategory[] = [];
  categories.map(categorie => {
    const collectionCategory: IProductsByCategory = {
      categorie,
      data: [],
    };
    products.map(product => {
      if (product.categorie.name === categorie.name) {
        collectionCategory.data.push(product);
      }
    });
    productsCategory.push(collectionCategory);
  });
  return productsCategory;
};
