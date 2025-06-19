import { create } from "zustand";
import { ILocation } from "../../../infrastructure/interfaces/location";
import { getCurrentLocation, clearWatchLocation, watchCurrentLocation } from '../../../actions/location/location';

export interface ILocationState {
  lastKnownLocation: ILocation | null;
  userLocationsHistory: ILocation[];
  watchId: number | null;

  getLocation: () => Promise<ILocation | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<ILocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocationsHistory: [],
  watchId: null,

  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnownLocation: location });

    return location;
  },

  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      get().clearWatchLocation();
    }

    const id = watchCurrentLocation((location) => {
      set({
        lastKnownLocation: location,
        userLocationsHistory: [...get().userLocationsHistory, location]
      })
    })

    set({ watchId: id });

  },

  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId !== null) {
      clearWatchLocation(watchId);
    }
  }
}))