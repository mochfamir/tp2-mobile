import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";

const fetchLatLong = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},USA&limit=10&appid=fa0bfbc91520394356cdc94d3e7888c4`
    );
    const data = await response.json();
    console.log(data);
    return data.find((datum) => datum?.country === "US");
  } catch (error) {
    console.error("Error fetching city data:", error);
    return [];
  }
};

const Map = ({ route }) => {
  const { city } = route.params;
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    fetchLatLong(city).then((data) => {
      setCityData(data);
    });
  }, [city]);

  return (
    <View style={styles.container}>
      <Text>Mapsss</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 33.6505397,
          longitude: -102.5118039,
          // latitudeDelta: 1.922,
          // longitudeDelta: 1.421,
        }}
      >
        {cityData?.lat && (
          <Marker
            coordinate={{
              latitude: cityData?.lat,
              longitude: cityData?.lon,
            }}
            title='Marker Title'
            description='Marker Description'
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // height: "400px",
  },
});

export default Map;
