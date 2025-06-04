import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ILocation } from '../../../infrastructure/interfaces/location';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: ILocation;
}

const Map = ({ showsUserLocation = true, initialLocation }: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showsUserLocation}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title="Title"
          description="My description"
          image={require("../../../assets/custom-marker.png")}
        /> */}
      </MapView>
    </>
  );
}

export default Map;
