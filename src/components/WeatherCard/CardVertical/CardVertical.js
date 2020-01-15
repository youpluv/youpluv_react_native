import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Temperature,
  ImageContainer,
  Date,
  Location,
  TextDate,
  TextLoc,
  TextTemp,
  TextTempRange,
  Pin,
  TextDateMonth
} from "./styles";

import locationIMG from "../../../assets/images/locationIMG.png";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { Animations } from "../../../assets/animations";

import moment from "moment";
import "moment/locale/pt-br";
import "moment-timezone";

export default function CardVertical(props) {
  const { data = {}, region = "" } = props;
  return (
    <LinearGradient
      colors={["#fff", "#AADDE4", "#AADDE4"]}
      style={{ borderRadius: 10 }}
    >
      <Container>
        <Location>
          <Pin source={locationIMG} />
          <TextLoc>{region}</TextLoc>
        </Location>

        <Temperature>
          <View style={{ alignItems: "center" }}>
            <TextTemp>{data.temp}°</TextTemp>
            <TextTempRange>
              {data.tempMin}°/{data.tempMax}°c
            </TextTempRange>
          </View>
          <ImageContainer>
            <LottieView
              autoPlay
              loop
              style={{
                height: 45
              }}
              source={Animations.WeatherAnimations["sunny"]}
            />
          </ImageContainer>
        </Temperature>

        <Date>
          <TextDate>{moment(data.date).format("dddd")}</TextDate>
          <TextDateMonth>{moment(data.date).format("MMMM, DD")}</TextDateMonth>
        </Date>
      </Container>
    </LinearGradient>
  );
}
