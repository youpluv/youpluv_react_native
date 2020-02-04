import React, { useState, useEffect } from "react";
import { Container, Title, DateTime } from "./styles";
import moment from "moment";
import CustomGradient from "../../../components/CustomGradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../../components/Button";
import { ToastAndroid, View, Text } from "react-native";

export default function RangeTime(props) {
  const br = `\n`;
  const {
    initialDate,
    setInitialDate,
    initialHour,
    setInitialHour,
    finalHour,
    setFinalHour,
    finalDate,
    setFinalDate
  } = props;
  const [show, setShow] = useState("");

  useEffect(() => {
    // console.log("DATE :: ", new Date(finalDate));
    // console.log("HOUR :: ", new Date(finalHour));
    // console.log("initial Date :: ", new Date(initialDate));
    // console.log("initial Hour :: ", new Date(initialHour));
  });

  useEffect(() => {
    setInitialDate(new Date());
    setInitialHour(new Date());
    setFinalDate(new Date());
    setFinalHour(new Date());
  }, []);

  const changeInitialDate = event => {
    let dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow("initialHour");
      setInitialDate(dateSelected);
    } else {
      setShow("");
    }
  };

  const changeInitialHour = event => {
    let dateSelected = event.nativeEvent.timestamp;
    setShow("");
    if (dateSelected !== undefined) {
      setInitialHour(dateSelected);
    }
  };

  const changeFinalDate = event => {
    let dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow("finalHour");
      setFinalDate(dateSelected);
    } else {
      setShow("");
    }
  };

  const changeFinalHour = event => {
    let dateSelected = event.nativeEvent.timestamp;
    setShow("");
    if (dateSelected !== undefined) {
      setFinalHour(dateSelected);
    }
  };

  const validateDateTime = () => {
    if (initialDate > finalDate) {
      ToastAndroid.show(
        "A Data Initial não pode ser maior que a Data Final!!!!",
        ToastAndroid.LONG
      );
    } else {
      props.next();
    }
  };

  const formatDate = (dateTime,hourTime) => {
    const time = moment(dateTime).format("DD/MM/YYYY")+"    "+ moment(hourTime).format("HH:mm");
    console.log("timeee", time)
    return time
  };  

  return (
    <CustomGradient colors={["#015D7B", "#A7E9FF"]}>
      <Container>
        <Title>
          Primeiro, insira o dia e horário do {br} início da chuva. {br} É
          fácil, basta clicar no botão. abaixo.
        </Title>

        {show === "initialDate" && (
          <DateTimePicker
            value={initialDate}
            mode={"date"}
            display="default"
            onChange={event => changeInitialDate(event)}
          />
        )}

        {show === "initialHour" && (
          <DateTimePicker
            value={initialHour}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={event => changeInitialHour(event)}
          />
        )}

        <Button full onPress={() => setShow("initialDate")}>
          Data e hora inicial
        </Button>

        <DateTime style={{ marginBottom: 28 }}>
          {formatDate(initialDate, initialHour)}
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
            onChange={event => changeFinalDate(event)}
            onConfirm={finalDate}
          />
        )}

        {show === "finalHour" && (
          <DateTimePicker
            value={finalDate}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={event => changeFinalHour(event)}
            onConfirm={finalDate}
          />
        )}

        <Button full onPress={() => setShow("finalDate")}>
          Data e hora final
        </Button>

        <DateTime>{formatDate(finalDate, finalHour)}</DateTime>

        <Button
          onPress={validateDateTime}
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
