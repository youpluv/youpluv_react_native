import React, { useState, Component } from "react";
import { Container, Title, Div, H2, Content, TextBtn } from "./styles";
// import DateTimePicker from "@react-native-community/datetimepicker";
import CustomGradient from "../../components/CustomGradient";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
export default function Registry() {
  const br = `\n`;
  const today = new Date();
  const [inicialDate, setInicialDate] = useState(today);
  const [finalDate, setFinalDate] = useState(today);
  const [show, setShow] = useState("");

  const changeInicialDate = (event, type) => {
    const dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow(type === "date" ? "inicialHour" : "");
      setInicialDate(dateSelected);
    } else {
      setShow("");
    }
  };

  const changeFinalDate = (event, type) => {
    const dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow(type === "date" ? "finalHour" : "");
      setInicialDate(dateSelected);
    } else {
      setShow("");
    }
  };

  return (
    <CustomGradient>
      <Container>
        <Title>
          Primeiro, insira o dia e horário do {br} início da chuva. {br} É
          fácil, basta clicar no botão. abaixo.
        </Title>
        {show === "inicialDate" && (
          <DateTimePicker
            value={inicialDate}
            mode={"date"}
            display="default"
            onChange={event => changeInicialDate(event, "date")}
          />
        )}
        {show === "inicialHour" && (
          <DateTimePicker
            value={inicialDate}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={event => changeInicialDate(event, "hour")}
          />
        )}

        <Button onPress={() => setShow("inicialDate")}>
          Data e hora inicial
        </Button>
        <Title>
          Tudo certo ? {br}
          Agora, insira o dia e horário do fim {br} da chuva. Depois clique em
          avançar.
        </Title>
        {show === "finalDate" && (
          <DateTimePicker
            value={finalDate}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={event => changeFinalDate(event, "date")}
          />
        )}
        {show === "finalHour" && (
          <DateTimePicker
            value={finalDate}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={event => changeFinalDate(event, "hour")}
          />
        )}
        <Button onPress={() => setShow("finalDate")}>Data e hora final</Button>
        <Button bgColor={"#116682"} textColor={"#fff"}>
          Avançar >
        </Button>
      </Container>
    </CustomGradient>
  );
}
