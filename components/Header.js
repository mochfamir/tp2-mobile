import React from "react";
import { Appbar, IconButton } from "react-native-paper";
import { useCommonState } from "../context/CommonContext";

const Header = () => {
  const { state } = useCommonState();
  return (
    <Appbar.Header
      style={{ backgroundColor: "#176B87" }}
      theme={{
        colors: {
          primary: "#04364A",
        },
      }}
    >
      <IconButton
        icon='account'
        size={20}
        onPress={() => console.log("Pressed")}
      />
      <Appbar.Content title={state.nama} />
    </Appbar.Header>
  );
};

export default Header;
