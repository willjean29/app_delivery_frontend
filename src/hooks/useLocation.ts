import React, {useEffect, useRef, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {Region} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {RootStore} from 'store/store';
export interface Location {
  latitude: number;
  longitude: number;
}
const useLocation = () => {
  const {locationStatus} = useSelector((store: RootStore) => store.permissions);
  const [hasLocation, setHasLocation] = useState(false);
  const [routesLines, setRoutesLines] = useState<Location[]>([]);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [userLocation, setUserLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  const [selectLocation, setSelectLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });

  const watchID = useRef<number>();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current && locationStatus === 'granted') {
      getCurrentLocation().then(location => {
        setInitialPosition(location);
        setSelectLocation(location);
        setUserLocation(location);
        setHasLocation(true);
      });
    }
  }, [locationStatus]);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        err => reject({err}),
        {
          enableHighAccuracy: true,
          timeout: 1000,
        },
      );
    });
  };

  const onChangeLocation = (region: Region) => {
    setSelectLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  return {
    hasLocation,
    initialPosition,
    userLocation,
    selectLocation,
    getCurrentLocation,
    onChangeLocation,
  };
};

export default useLocation;
