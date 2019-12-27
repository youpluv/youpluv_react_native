import React, { useState, useEffect } from "react";
import * as Google from "expo-google-app-auth";

import {
  Container,
  Content,
  Circle,
  IconFacebook,
  IconGoogle,
  H2
} from "./styles";

export default function LoginSocial() {
  const [user, setUser] = useState({});
  const config = {
    clientId: `589923242748-pb7mduoqlemcm1sj8tflmt1oq91lj2dh.apps.googleusercontent.com`
    // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
    // androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
    // scopes: ["profile", "email"]
  };

  const signInAsync = async () => {
    try {
      const { type, accessToken, ...tudo } = await Google.logInAsync(config);
      console.log(type, accessToken, tudo);
      if (type === "success") {
        let userInfoResponse = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${accessToken}` }
          }
        ).then(res => res.json());

        console.log(userInfoResponse);
      }
    } catch ({ message }) {
      console.log("login: Error:" + message);
    }
  };
  return (
    <Container>
      <Content>
        <Circle>
          <IconFacebook name="facebook-f" />
        </Circle>
        <H2>Entrar com o Facebook</H2>
      </Content>
      <Content>
        <Circle onPress={signInAsync}>
          <IconGoogle name="gmail" />
        </Circle>
        <H2>Entrar com o Google</H2>
      </Content>
    </Container>
  );
}
