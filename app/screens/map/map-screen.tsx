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
  userTitle: {
    fontWeight: "bold",
    fontSize: 16,

  },
  userDescription: {
    fontSize: 12,
  }
})

const pfp = require("./pfp.png")
const david = require("./david.png")
const atiar = require("./atiar.png")

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
        image={pfp}
        title={'test title'}
        description={'test description'}
      >
        <Callout>
          <Text style={styles.userTitle}> Team B </Text>
          <Text> Class of 2021</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude : 40.629771,
          longitude : -74.000838}}
        image={david}
      >
        <Callout>
          <Text style={styles.userTitle}> David Zhao </Text>
          <Text> Class of 2021</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude : 40.642483,
          longitude : -73.935669}}
        image={atiar}
        >
          <Callout>
            <Text style={styles.userTitle}> Atiar Rahman </Text>
            <Text> Class of 2017</Text>
          </Callout>
        </Marker>
      </MapView>
    </Screen>
  )
})
