import React, { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Alert, StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Screen } from "../../components"
import { color } from "../../theme"
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  },
  map: {
    width: "100%",
    height: "100%",
  },
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
  logo: {
    alignSelf: "center",
    marginVertical: 50,
    maxWidth: "100%",
    width: 50,
    height: 50,
  },
})


export const MapScreen = observer(function MapScreen() {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [getLatitude, setLatitude] = useState(0);
  const [getLongitude, setLongitude] = useState(0);

  useEffect(() => {
  CheckIfLocationEnabled();
  GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      console.log(latitude)
      console.log(longitude)
      setLatitude(latitude)
      setLongitude(longitude)
    }
  };
  return (
    <Screen style={styles.root} preset="scroll">
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.713990,
          longitude: -73.932472,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        }}
      >
      <Marker
        coordinate={{
          latitude : getLatitude,
          longitude : getLongitude}}
      >
      </Marker>
      </MapView>
    </Screen>
  )
})
