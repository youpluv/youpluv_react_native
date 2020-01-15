import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from "./MainTabNavigator";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import Tutorial from "../screens/Tutorial/Tutorial";
import logo from "../assets/images/logo.png";
import SideMenu from '../components/SideMenu';
import { LinearGradient } from "expo-linear-gradient";
import TabBarIcon from "../components/TabBarIcon";
import RainData from "../screens/RainData/RainData";

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 40,
    alignSelf: "center"
  }
});

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: Login,
    Register: Register,
    ResetPassword: ResetPassword,
    Tutorial:Tutorial,
    Main: MainTabNavigator,
    SideMenu:SideMenu
  },{
    defaultNavigationOptions: {
      // headerRight: <View />,
      // headerTitle: <Image source={logo} style={styles.logo} resizeMode={"contain"} />,
      headerTintColor: "#fff",
      headerTransparent: true,
    }
    })
);
