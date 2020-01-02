import React, { useState } from "react";

import {
  Container,
  Content,
  Circle,
  IconFacebook,
  IconGoogle,
  H2
} from "./styles";
import { useDipatch, useDispatch } from "react-redux";
import { socialLogin } from "../../store/user/user.actions";
export default function LoginSocial() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <Circle>
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
