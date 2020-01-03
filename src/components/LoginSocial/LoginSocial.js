import React from "react";
import * as Facebook from "expo-facebook";
import { useDipatch, useDispatch } from "react-redux";
import { socialLogin } from "../../store/user/user.actions";
import { Alert } from "react-native";

import {
  Container,
  Content,
  Circle,
  IconFacebook,
  IconGoogle,
  H2
} from "./styles";
export default function LoginSocial() {
  const dispatch = useDispatch();
  async function logInFacebook() {
    try {
      await Facebook.initializeAsync("641247119948894");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  return (
    <Container> 
      <Content>
        <Circle onPress={() => logInFacebook()}>
          <IconFacebook name="facebook-f" />
        </Circle>
        <H2>Entrar com o Facebook</H2>
      </Content>
      <Content>
        <Circle onPress={() => dispatch(socialLogin())}>
          <IconGoogle name="gmail" />
        </Circle>
        <H2>Entrar com o Google</H2>
      </Content>
    </Container>
  );
}
