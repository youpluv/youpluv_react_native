import React from "react";
import {
  Container,
  Content,
  Circle,
  IconFacebook,
  IconGoogle,
  H2
} from "./styles";

export default function LoginSocial() {
  return (
    <Container>
      <Content>
        <Circle>
          <IconFacebook name="facebook-f" />
        </Circle>
        <H2>Entrar com o Facebook</H2>
      </Content>
      <Content>
        <Circle>
          <IconGoogle name="gmail" />
        </Circle>
        <H2>Entrar com o Google</H2>
      </Content>
    </Container>
  );
}
