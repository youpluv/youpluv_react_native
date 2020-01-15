import React, { useState, useEffect } from "react";
import { Container, Title, DateTime } from "./styles";
import moment from "moment";
import CustomGradient from "../../components/CustomGradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
import { ToastAndroid } from "react-native";

export default function Registry(props) {
  const br = `\n`;
  // const today = new Date();
  const [inicialDate, setInicialDate] = useState();
  const [finalDate, setFinalDate] = useState();
  const [show, setShow] = useState("");

  useEffect(() => {
    setInicialDate(new Date());
    setFinalDate(new Date());
  }, []);
  const changeInicialDate = (event, type) => {
    let dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow(type === "date" ? "inicialHour" : "");
      if (type === "date") {
        console.log(dateSelected, inicialDate);

        setInicialDate(new Date(dateSelected));
      } else {
        const hours = moment(dateSelected).hours();
        const minutes = moment(dateSelected).minutes();
        const momentDate = moment(inicialDate);
        console.log(dateSelected, inicialDate);

        console.log(momentDate);
        setInicialDate(momentDate.toDate());
      }
    } else {
      setShow("");
    }
  };
  const validateDateTime = () => {
    if (inicialDate > finalDate) {
      ToastAndroid.show(
        "A Data Inicial não pode ser maior que a Data Final!!!!",
        ToastAndroid.LONG
      );
    }
  };
  const formatDate = dateTime => {
    return moment(dateTime).format("DD/MM/YYYY       HH:mm");
  };

  const changeFinalDate = (event, type) => {
    const dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow(type === "date" ? "finalHour" : "");
      setFinalDate(dateSelected);
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

        <Button full onPress={() => setShow("inicialDate")}>
          Data e hora inicial
        </Button>

        <DateTime style={{ marginBottom: 28 }}>
          {formatDate(inicialDate)}
        </DateTime>

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
            onConfirm={finalDate}
          />
        )}

        {show === "finalHour" && (
          <DateTimePicker
            value={finalDate}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={event => changeFinalDate(event, "hour")}
            onConfirm={finalDate}
          />
        )}

        <Button full onPress={() => setShow("finalDate")}>
          Data e hora final
        </Button>

        <DateTime>{formatDate(finalDate)}</DateTime>

        <Button
          onPress={() =>
            validateDateTime() ? true : props.navigation.navigate("RainData")
          }
          bgColor={"#116682"}
          box
          textColor={"#fff"}
        >
          Avançar >
        </Button>
      </Container>
    </CustomGradient>
  );
}
