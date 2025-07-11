import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { ILocation } from '../../../infrastructure/interfaces/location';
import FAB from '../ui/FAB';
import { useLocationStore } from '../../store/location/useLocationStore';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: ILocation;
}

const Map = ({ showsUserLocation = true, initialLocation }: Props) => {

  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<ILocation>(initialLocation);
  const { getLocation, lastKnownLocation, watchLocation, clearWatchLocation, userLocationsHistory } = useLocationStore();
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isShowingPolyline, setIsShowingPolyline] = useState(true);

  const moveCamaraLocation = (location: ILocation) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({ center: location })
  }

  const moveToCurrentLocation = async () => {
    if (lastKnownLocation) {
      moveCamaraLocation(lastKnownLocation);
    }

    const location = await getLocation();
    if (!location) return;
    moveCamaraLocation(location);
  }

  useEffect(() => {
    watchLocation();

    return () => clearWatchLocation();
  }, []);


  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCamaraLocation(lastKnownLocation);
    }
  }, [lastKnownLocation]);


  return (
    <>
      <MapView
        ref={(map) => mapRef.current = map!}
        showsUserLocation={showsUserLocation}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        onTouchStart={() => setIsFollowingUser(false)}
        region={{
          latitude: cameraLocation.current.latitude,
          longitude: cameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {isShowingPolyline &&
          <Polyline
            coordinates={userLocationsHistory}
            strokeColor='red'
            strokeWidth={5}
          />
        }
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
      <FAB
        iconName={isShowingPolyline ? "eye-outline" : "eye-off-outline"}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={{ right: 20, bottom: 140 }}
      />
      <FAB
        iconName={isFollowingUser ? "walk-outline" : "accessibility-outline"}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{ right: 20, bottom: 80 }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{ right: 20, bottom: 20 }}
      />
    </>
  );
}

export default Map;
