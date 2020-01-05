import React, { useState, Component } from "react";
import { Container, Title, Div, H2, Content, TextBtn } from "./styles";
// import DateTimePicker from "@react-native-community/datetimepicker";
import CustomGradient from "../../components/CustomGradient";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Registry() {
  const br = `\n`;
  const today = new Date();
  const [date, setDate] = useState(today);
  const [show, setShow] = useState(false);
  console.log(date);
  const show = mode => {
    setState({
      show: true,
      mode
    });
  };

  return (
    <CustomGradient>
      <Container>
        <Title>
          Primeiro, insira o dia e horário do {br} início da chuva. {br} É
          fácil, basta clicar no botão. abaixo.
        </Title>
        <Div>
          <H2>Data e hora inicial</H2>
        </Div>
        <View></View>
        <Title>
          Tudo certo ? {br}
          Agora, insira o dia e horário do fim {br} da chuva. Depois clique em
          avançar.
        </Title>
        <Div>
          <H2>Data e hora inicial</H2>
        </Div>
        <Content>
          <TextBtn>Avançar ></TextBtn>
        </Content>
      </Container>
    </CustomGradient>
  );
}
