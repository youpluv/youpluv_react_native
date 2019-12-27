import React, { useState } from "react";
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
  const config = {
    androidClientId: `717368453351-467lcq0q5lfu3jmf9t2ko7d6mpt0nn2a.apps.googleusercontent.com`
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
