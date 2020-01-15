import React, { useState, Component } from "react";
import { Container, Title, DateTime } from "./styles";
import moment from "moment";
import CustomGradient from "../../components/CustomGradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
import { ToastAndroid, View, Text } from "react-native";

export default function MyRegistries() {
  const br = `\n`;
  const today = new Date();
  const [inicialDate, setInicialDate] = useState(today);
  const [finalDate, setFinalDate] = useState(today);
  const [show, setShow] = useState("");

  const changeInicialDate = (event, type) => {
    let dateSelected = event.nativeEvent.timestamp;
    if (dateSelected !== undefined) {
      setShow(type === "date" ? "inicialHour" : "");
      if (type === "date") {
        setInicialDate(dateSelected);
      } else {
        const hours = moment(dateSelected).hours();
        const minutes = moment(dateSelected).minutes();
        const momentDate = moment(inicialDate);
        console.log(momentDate);
        console.log(new Date(inicialDate));

        momentDate.hours(hours).minutes(minutes);
        console.log(momentDate);
        setInicialDate(dateSelected);
      }
    } else {
      setShow("");
    }
  };
  const validateDateTime = () => {
    if (inicialDate > finalDate) {
      ToastAndroid.show("Erro!!", ToastAndroid.LONG);
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Meus Registros</Text>
    </View>
  );
}
