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

export default function Register(props) {
  const [form, setForm] = useState({});
  const userStore = useSelector(state => state.user);
  const { error, loading } = userStore;
  const user = userStore.data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.token) props.navigation.navigate("Main");
  }, [user]);

  const handleChangeText = (value, key) => {
    setForm({
      ...form,
      [key]: value
    });
  };

  const handleRegister = _form => {
    dispatch(register(_form));
  };

  return (
    <CustomGradient style={styles.container}>
      {loading && <Loading />}

      <ContainerForm behavior="padding" enabled>
        <Input
          placeholder="Nome"
          onChangeText={text => handleChangeText(text, "name")}
          placeholderColor={"#fff"}
        />
        <Input
          placeholder="Email"
          onChangeText={text => handleChangeText(text, "email")}
          placeholderColor={"#fff"}
        />
        <Input
          secureTextEntry={true}
          onChangeText={text => handleChangeText(text, "password")}
          placeholder="Senha"
          placeholderColor={"#fff"}
          iconLeftName="visibility-off"
        />
        <Input
          secureTextEntry={true}
          onChangeText={text => handleChangeText(text, "confirmPassword")}
          placeholder="Confirmar Senha"
          placeholderColor={"#fff"}
          iconLeftName="visibility-off"
        />

        <Button
          width={"100%"}
          onPress={() => handleRegister(form)}
          value={"CRIAR CONTA"}
        />
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
