import { create } from "zustand";
import { ILocation } from "../../../infrastructure/interfaces/location";
import { getCurrentLocation } from "../../../actions/location/location";

export interface ILocationState {
  lastKnownLocation: ILocation | null;
  getLocation: () => Promise<ILocation | null>;
}

export const useLocationStore = create<ILocationState>()((set, get) => ({
  lastKnownLocation: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnownLocation: location });

    return location;
  }
}))