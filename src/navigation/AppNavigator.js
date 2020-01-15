import React from "react";
import { StyleSheet, Image, View } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import Tutorial from "../screens/Tutorial/Tutorial";
import logo from "../assets/images/logo.png";
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
  // createStackNavigator(
  //   {
  //     // You could add another route here for authentication.
  //     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //     Login: Login,
  //     Register: Register,
  //     RainData: RainData,

  //     ResetPassword: ResetPassword,
  //     Tutorial: Tutorial,
  //     Main: MainTabNavigator
  //   },
  //   {
  //     defaultNavigationOptions: {
  //       // headerRight: <View />,
  //       // headerTitle: <Image source={logo} style={styles.logo} resizeMode={"contain"} />,
  //       headerTintColor: "#fff",
  //       headerTransparent: true
  //     }
  //   }
  // )
  createDrawerNavigator(
    {
      Main: {
        screen: MainTabNavigator,
        navigationOptions: () => ({
          drawerIcon: (
            <TabBarIcon
              name="md-home"
              type="ionicons"
              size={20}
              color="white"
            />
          )
        })
      }
    },
    {
      drawerBackgroundColor: "#116682",
      drawerType: "slide",
      contentOptions: {
        activeTintColor: "white",
        inactiveTintColor: "white"
      }
    }
  )
);
