import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableHighlight, Text } from "react-native";

import { ContainerForm, Row } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import CustomGradient from "../../components/CustomGradient";

export default function Login(props) {

  const [name, setName] = useState("")

  const handleChangeName = (event) => {
    console.log(event.target)
  }

  return (
    <CustomGradient style={styles.container} >
      <Image source={logo} style={styles.logo} resizeMode={"contain"} />
      <ContainerForm>
        <Input placeholder="email" backgroundColor="white" iconName="email" />
        <Input  onChange={handleChangeName} secureTextEntry={true} placeholder="senha" backgroundColor="white" iconName="lock" />
        <Row justify={"flex-end"}>
          <TouchableHighlight onPress={() => props.navigation.navigate("ResetPassword")}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableHighlight>
        </Row>
        <Button onPress={() => props.navigation.navigate("Main")} />
      </ContainerForm>

      <Row justify={"center"} style={{position: "absolute", bottom: 30}}>
        <Text style={styles.withoutAccount}>Ainda sem conta?</Text>
          <TouchableHighlight onPress={() => props.navigation.navigate("Register")}>
            <Text style={styles.register}> Cadastre-se</Text>
          </TouchableHighlight>
        </Row>
    </CustomGradient>
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
