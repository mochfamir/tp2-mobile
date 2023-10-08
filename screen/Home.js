import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useCommonState } from "../context/CommonContext";

const Home = () => {
  const { state } = useCommonState();
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium'>
        Selamat Datang{" "}
        {state?.nama === "Guest" || !state?.nama ? "" : state.nama}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
});

export default Home;
