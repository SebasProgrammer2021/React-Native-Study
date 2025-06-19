import Geolocation from '@react-native-community/geolocation';
import { ILocation } from '../../infrastructure/interfaces/location';

// Geolocation.getCurrentPosition(info => console.log(info));

export const getCurrentLocation = (): Promise<ILocation> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(info => {
      resolve({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
      })
    },
      (error) => {
        console.log(`Can't get location: ${error}`);
        reject(error);
      }, {
      enableHighAccuracy: true
    })
  });
}

export const watchCurrentLocation = (locationCallback: (location: ILocation) => void): number => {
  return Geolocation.watchPosition(info => (
    locationCallback({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude
    })
  ), (error) => {
    throw new Error("Can´t get watch position");
  }, {
    enableHighAccuracy: true
  });
}

export const clearWatchLocation = (watchId: number) => {
  Geolocation.clearWatch(watchId);
}