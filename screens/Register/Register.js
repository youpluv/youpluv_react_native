import React from "react";
import { StyleSheet, View, Image, TouchableHighlight, Text } from "react-native";

import { ContainerForm, Row } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import CustomGradient from "../../components/CustomGradient";

export default function Register(props) {
  return (
    <CustomGradient style={styles.container} >
      <ContainerForm>
        <Input placeholder="Nome" placeholderColor={"#fff"}/>
        <Input placeholder="Email" placeholderColor={"#fff"}/>
        <Input secureTextEntry={true} placeholder="Senha"  placeholderColor={"#fff"}/>
        <Input secureTextEntry={true} placeholder="Confirmar Senha"  placeholderColor={"#fff"}/>
        
        <Button width={"100%"} onPress={() => props.navigation.navigate("Main")} value={"CRIAR CONTA"}/>
      </ContainerForm>
    </CustomGradient>
  );
}

// Register.navigationOptions = {
//   header: null,
// };

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
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#fff",
  },
  withoutAccount: {
    color: "#fff",
  },
  register: {
    fontWeight: "900",
    color: "#fff",
  }
});
