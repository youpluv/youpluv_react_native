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
  return (
    <Container background={props.background}>
      <Temperature>
        <View>
          <TextTemp>20°</TextTemp>
          <TextTempRange>18/23°c</TextTempRange>
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
