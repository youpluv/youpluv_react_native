import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text
} from "react-native";

import { ContainerForm, Row } from "../../components/Structure";
import logo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import CustomGradient from "../../components/CustomGradient";
import { register } from "../../store/user/user.actions";
import Loading from "../../components/Loading";
import { Formik } from "formik";
import * as Yup from "yup";
import { getTokenPush } from "../../services/notification.service";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome curto")
    .max(50, "Nome é muito grande")
    .required("Nome é obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "Senha fraca")
    .required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .required("Confirmar a senha é obrigatório")
    .test("passwords-match", "Senhas não conferem", function(value) {
      return this.parent.password === value;
    })
});

export default function Register(props) {
  const userStore = useSelector(state => state.user);
  const [deviceToken, setDeviceToken] = useState("");
  const { error, loading } = userStore;
  const user = userStore.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.token) props.navigation.replace("drawer");
  }, [user]);

  useEffect(() => {
    handleGetTokenPush();
  }, []);

  const handleGetTokenPush = async () => {
    setDeviceToken(await getTokenPush());
  };

  const handleRegister = _form => {
    dispatch(register(_form));
  };

  return (
    <CustomGradient style={styles.container}>
      {loading && <Loading />}

      <ContainerForm behavior="padding" enabled>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          onSubmit={values =>
            handleRegister({ ...values, device_token: deviceToken })
          }
          validationSchema={RegisterSchema}
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
                error={touched.name && errors.name}
                onBlur={handleBlur("name")}
                placeholder="Nome"
                onChangeText={handleChange("name")}
                placeholderColor={"#fff"}
                color="white"
              />
              <Input
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
                placeholder="Email"
                onChangeText={handleChange("email")}
                placeholderColor={"#fff"}
                color="white"
              />
              <Input
                error={touched.password && errors.password}
                onBlur={handleBlur("password")}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                placeholder="Senha"
                placeholderColor={"#fff"}
                iconLeftName="visibility-off"
                color="white"
              />
              <Input
                error={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
                secureTextEntry={true}
                onChangeText={handleChange("confirmPassword")}
                placeholder="Confirmar Senha"
                placeholderColor={"#fff"}
                iconLeftName="visibility-off"
                color="white"
              />

              <Button
                width={"100%"}
                onPress={values => handleSubmit(values)}
                value={"CRIAR CONTA"}
              />
            </>
          )}
        </Formik>
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
  }
});
