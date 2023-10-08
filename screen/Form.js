import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput, Surface } from "react-native-paper";
import { useCommonState } from "../context/CommonContext";

const Form = () => {
  const { setState } = useCommonState();
  const [nama, setNama] = React.useState("");
  const [hobi, setHobi] = React.useState("");

  return (
    <View style={styles.container}>
      <Surface style={styles.surface} elevation={4}>
        <Text style={styles.title} variant='headlineMedium'>
          Form Data Diri
        </Text>
        <TextInput
          style={styles.textInput}
          label='Nama'
          value={nama}
          onChangeText={(value) => setNama(value)}
        />
        <TextInput
          style={styles.textInput}
          label='Hobi'
          value={hobi}
          onChangeText={(value) => setHobi(value)}
        />
        <Button
          mode='contained'
          onPress={() =>
            setState({
              nama,
              hobi,
            })
          }
        >
          Simpan
        </Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  title: {
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  surface: {
    padding: 20,
  },
});

export default Form;
