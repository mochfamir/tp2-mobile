import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Mapsss</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -6.2017692, // Ganti dengan latitude awal
          longitude: 106.7796261, // Ganti dengan longitude awal
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: -6.201641160686483, // Ganti dengan latitude marker
            longitude: 106.78222251263776, // Ganti dengan longitude marker
          }}
          title='Marker Title'
          description='Marker Description'
        />
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
