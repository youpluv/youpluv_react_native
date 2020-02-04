import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableHighlight, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { ContainerForm, Row } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import CustomGradient from "../../components/CustomGradient";
import { login } from "../../store/user/user.actions";
import Loading from "../../components/Loading";
import LineDivisor from "../../components/LineDivisor/LineDivisor";
import LoginSocial from "../../components/LoginSocial/LoginSocial";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  password: Yup.string().required("Senha obrigatória")
});
export default function Login(props) {
  const userStore = useSelector(state => state.user);
  const { error, loading } = userStore;
  const user = userStore.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.token) props.navigation.replace("drawer");
  }, [user]);

  const handleLogin = _form => {
    dispatch(login(_form));
  };

  return (
    <CustomGradient style={styles.container}>
      {loading && <Loading />}
      <Image source={logo} style={styles.logo} resizeMode={"contain"} />
      <ContainerForm behavior="padding">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => handleLogin(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched
          }) => (
            <>
              {console.log(errors, touched)}
              <Input
                hasIcon
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                placeholder="email"
                backgroundColor="white"
                iconName="email"
              />
              <Input
                hasIcon
                error={touched.password && errors.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                secureTextEntry={true}
                placeholder="senha"
                backgroundColor="white"
                iconBackgroundColor="white"
                iconName="lock"
                iconLeftName
              />
              <Row justify={"flex-end"} style={{marginTop:-10, marginBottom:10,}}>
                <TouchableHighlight
                  onPress={() => props.navigation.navigate("ResetPassword")}
                >
                  <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableHighlight>
              </Row>
              <Button onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </ContainerForm>

      <LineDivisor />
      <LoginSocial />
      <Row justify={"center"} style={{ position: "absolute", bottom: 30 }}>
        <Text style={styles.withoutAccount}>Ainda sem conta?</Text>
        <TouchableHighlight
          onPress={() => props.navigation.navigate("Register")}
        >
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
    justifyContent: "center",
    alignItems: "center"
  },
  forgotPassword: {
    fontFamily: "montserrat-italic",
    alignSelf: "flex-end",
    color: "#fff"
  },
  withoutAccount: {
    fontFamily: "montserrat-regular",
    color: "#fff"
  },
  register: {
    fontFamily: "montserrat-bold",
    color: "#fff"
  }
});
