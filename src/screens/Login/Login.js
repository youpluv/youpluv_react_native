import React, { useState, useEffect } from "react";
import { StyleSheet, ActivityIndicator, Image, TouchableHighlight, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { ContainerForm, Row } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import CustomGradient from "../../components/CustomGradient";
import { login } from "../../store/user/user.actions";

export default function Login(props) {

  const [form, setForm] = useState({})
  const userStore = useSelector(state=> state.user)
  const {error, loading} = userStore
  const user = userStore.data
  const dispatch = useDispatch()


  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    })
  }

  useEffect(()=>{
    console.log(user)
  }, [user])

  const handleLogin = () => {
    dispatch(login({
      email: "adrielle.psi@gmail.com",
      password: "123"
    }))
  }

  return (
    <CustomGradient style={styles.container} >

      <Image source={logo} style={styles.logo} resizeMode={"contain"} />
      <ContainerForm>
        <Input onChangeText={text => handleChangeText(text, 'email')} placeholder="email" backgroundColor="white" iconName="email" />
        <Input  onChangeText={text => handleChangeText(text, 'password')} secureTextEntry={true} placeholder="senha" backgroundColor="white" iconName="lock" />
        <Row justify={"flex-end"}>
          <TouchableHighlight onPress={() => props.navigation.navigate("ResetPassword")}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableHighlight>
        </Row>
        <Button onPress={handleLogin} />
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
