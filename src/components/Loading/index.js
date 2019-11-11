import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Container, Content } from './styles';
import LottieView from "lottie-react-native";

export default function Loading(props) {
  
  const { text = "Aguarde..." } = props
    return (
    <Container>
        <Content>
        <LottieView
            autoPlay
            loop
          style={{
            width: 200,
            height: 200,
          }}
          source={require('../../assets/animations/loading.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
            {/* <ActivityIndicator style={{marginHorizontal: 20}} size="large" color="#121212" />
            <Text>{text}</Text> */}
        </Content>
    </Container>
  );
}
