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