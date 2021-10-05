import axios from 'axios';
import {Location} from 'utils/types';
import {IGeocodingReverse} from 'utils/interfaces';

export const getInfoCoordinates = async (location: Location) => {
  const urlGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyCrA4Xq6af2XjoUjk84kCtm38fy3X9Nxng`;
  const response = await axios.get<IGeocodingReverse>(urlGeocoding);
  return response.data.results[0].formatted_address;
};
