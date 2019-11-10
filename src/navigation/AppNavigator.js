import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import logo from "../assets/images/logo.png";

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 40,
    alignSelf: "center"
  }
})

export default createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: Login,
    Register: Register,
    ResetPassword: ResetPassword,
    Main: MainTabNavigator,
  },{
    defaultNavigationOptions: {
      // headerRight: <View />,
      // headerTitle: <Image source={logo} style={styles.logo} resizeMode={"contain"} />,
      headerTintColor: "#fff",
      headerTransparent: true,
    }
    })
  
);
