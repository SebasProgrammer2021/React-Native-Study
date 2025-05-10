import { PERMISSIONS, PermissionStatus as RNPermisionsStatus, check, openSettings, request } from "react-native-permissions"
import { PermissionStatus } from "../../infrastructure/interfaces/permissions";
import { Platform } from "react-native";

export const requestLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermisionsStatus = 'unavailable';

  if (Platform.OS === 'ios') {

    /// el request abre el popup solicitando el permiso
    status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Platform not supported');
  }

  if (status === 'blocked') {
    await openSettings();
    // return checkLocationPermission();
  }

  const permissionMapper: Record<RNPermisionsStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'denied',
    unavailable: 'unavailable',
    limited: 'limited',
  }

  return permissionMapper[status] ?? 'unavailable';
}


export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermisionsStatus = 'unavailable';

  if (Platform.OS === 'ios') {


    /// el check solo verifica si el permiso esta activo o no 
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Platform not supported');
  }

  const permissionMapper: Record<RNPermisionsStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'denied',
    unavailable: 'unavailable',
    limited: 'limited',
  }

  return permissionMapper[status] ?? 'unavailable';
}