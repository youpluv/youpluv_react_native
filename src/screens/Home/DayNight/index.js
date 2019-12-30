import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { Container, Content } from "./styles";
import LottieView from "lottie-react-native";
import Layout from "../../../constants/Layout";

export default function DayNight(props) {
  const { text = "Aguarde..." } = props;
  const date = new Date();
  const progress = (1 / 24) * date.getHours();
  console.log("PROPGRESSO :: ", progress);
  return (
    <Container>
      <LottieView
        autoSize
        autoPlay
        loop
        speed={0.1}
        style={{
          width: Layout.window.width * 1.6
        }}
        hardwareAccelerationAndroid={true}
        source={require("../../../assets/animations/day-night.json")}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      {/* <ActivityIndicator style={{marginHorizontal: 20}} size="large" color="#121212" />
            <Text>{text}</Text> */}
    </Container>
  );
}
