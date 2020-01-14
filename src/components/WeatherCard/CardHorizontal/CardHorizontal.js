import React, { useState } from "react";
import { View } from "react-native";
import {
  Container,
  Temperature,
  ImageContainer,
  Date,
  Line,
  TextDate,
  TextTemp,
  TextTempRange,
  TextDateMonth
} from "./styles";

import LottieView from "lottie-react-native";
import { Animations } from "../../../assets/animations";

export default function CardHorizontal(props) {
  const { data = {} } = props;
  return (
    <Container background={props.background}>
      <Temperature>
        <View>
          <TextTemp>{data.temp}°</TextTemp>
          <TextTempRange>
            {data.tempMin}°/{data.tempMax}°c
          </TextTempRange>
        </View>
      </Temperature>
      <ImageContainer>
        <LottieView
          autoPlay
          loop
          style={{
            height: 45
          }}
          source={Animations.WeatherAnimations["foggy"]}
        />
      </ImageContainer>

      <Line />

      <Date>
        <TextDate>Quinta-feira</TextDate>
        <TextDateMonth>Novembro, 14</TextDateMonth>
      </Date>
    </Container>
  );
}
