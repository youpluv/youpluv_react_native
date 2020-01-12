import React, { useEffect } from "react";
import { ActivityIndicator, Text } from "react-native";
import { Container, Content } from "./styles";
import LottieView from "lottie-react-native";
import Layout from "../../../constants/Layout";
import { useState } from "react";
import { Animations } from "../../../assets/animations";

export default function DayNight(props) {
  const { text = "Aguarde..." } = props;
  const date = new Date();
  let animation = React.createRef();

  useEffect(() => {
    const playAnimation = props.navigation.addListener("didFocus", () => {
      if (animation) animation.play();
    });
    return () => playAnimation.remove();
  }, []);

  return (
    <Container>
      <LottieView
        ref={myAnimation => {
          animation = myAnimation;
        }}
        autoSize
        autoPlay
        loop
        speed={0.1}
        style={{
          width: Layout.window.width * 1.6
        }}
        hardwareAccelerationAndroid={true}
        source={Animations.dayNight}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      {/* <ActivityIndicator style={{marginHorizontal: 20}} size="large" color="#121212" />
            <Text>{text}</Text> */}
    </Container>
  );
}
