// Generated by https://quicktype.io

export interface IBusinessResponse {
  success: boolean;
  business: IBusiness;
}

export interface IBusiness {
  _id: string;
  name: string;
  user: string;
  categorie: string;
  location: ILocation;
  address: string;
  phone: string;
  background: string;
  rating: number;
  __v: number;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  _id: string;
}

// Generated by https://quicktype.io

export interface IBusinessCategoriesResponse {
  success: boolean;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  _id: string;
  business: string;
  subcategorie: ISubcategorie;
  __v: number;
}

export interface ISubcategorie {
  _id: string;
  name: string;
  __v: number;
}

// Generated by https://quicktype.io

export interface IBusinessProductsResponse {
  success: boolean;
  products: IProduct[];
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  categorie: string;
  business: string;
  __v: number;
}

// Generated by https://quicktype.io

export interface IBusinessAllResponse {
  success: boolean;
  business: IBusiness[];
}
