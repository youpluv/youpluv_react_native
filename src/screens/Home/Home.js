import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import { Container, Content } from "./styles";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";
import DayNight from "./DayNight";
import Layout from "../../constants/Layout";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

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
      <DayNight />
      <Content>
        <View style={{flexDirection:'row'}}>
          <WeatherCard horizontal/>
          <View style={{marginLeft:20}}>
            <WeatherCard vertical style={{marginBottom:10}}/>
            <WeatherCard/>
          </View>
        </View>
        <Button onPress={logout}>Logout</Button>
      </Content>
    </Container>
  );
}

Home.navigationOptions = {
  header: null
};
