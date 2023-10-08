import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { CommonContextProvider } from "./context/CommonContext";
import Header from "./components/Header";

export default function App() {
  return (
    <PaperProvider>
      <CommonContextProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Header />
            <Navigation />
          </NavigationContainer>
        </View>
      </CommonContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
