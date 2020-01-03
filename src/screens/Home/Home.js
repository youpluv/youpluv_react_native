import React from "react";
import { StyleSheet, View, Text, Image} from "react-native";

import Button from "../../components/Button";
import { Container, Content, MyText } from "./styles";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";
import DayNight from "./DayNight";
import Layout from "../../constants/Layout";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import CardTutorial from "../../components/CardTutorial/CardTutorial";
import Arrow from '../../assets/images/seta.png'
import textHome from '../../assets/images/textHome.png'

export default function Home(props) {
  const dispatch = useDispatch();

  const logout = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    dispatch(removeUser());
    props.navigation.dispatch(resetAction);
  };
  return (
    <Container>
      <DayNight {...props} />
      <Content>
        <WeatherCard containerStyle={{ marginTop: -80 }} />
        <CardTutorial/>
        <View style={{flexDirection:'row',alignItems:'flex-end' , height:90, width:300}}>
          <Image style={{width:232, height:52}} source={textHome}/>
          <Image style={{width:100, height:100,position:'absolute', right:10, bottom: -40}} source={Arrow}/>
        </View>
      </Content>
    </Container>
  );
}
