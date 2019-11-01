import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { ContainerForm } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode={"contain"} />
      <ContainerForm>
        <Input placeholder="email" color="white" iconName="email" />
        <Input placeholder="senha" color="white" iconName="lock" />
        <Button onPress={() => props.navigation.navigate("Main")} />
      </ContainerForm>
    </View>
  );
}

Login.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  logo: {
    width: 400,
    maxWidth: "70%",
    height: 100,
    marginBottom: 50
  },
  container: {
    flex: 1,
    backgroundColor: "#a7e9ff",
    justifyContent: "center",
    alignItems: "center"
  }
});
