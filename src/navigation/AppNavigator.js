import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import Tutorial from "../screens/Tutorial/Tutorial";
import TabBarIcon from "../components/TabBarIcon";
import MyContentComponent from "../components/SideMenu";
import Layout from "../constants/Layout";

const drawer = createDrawerNavigator(
    {
      Home: {
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
      },
      Tutorial: {
        screen: Tutorial,
        navigationOptions: () => ({
          title: "Tutorial Pluviômetro",
          drawerIcon: (
            <TabBarIcon name="tools" type="entypo" size={20} color="white" />
          )
        })
      }
    },
    {
      contentComponent: MyContentComponent,
      drawerType: "slide",
      edgeWidth: 100,
      drawerWidth: Layout.window.width * 0.8,
      contentOptions: {
        activeTintColor: "white",
        inactiveTintColor: "white"
      }
    }
  )

export default createAppContainer(
  createStackNavigator({
    drawer,  
    Login,
    Register,
    ResetPassword,
    Tutorial,
  },{
    defaultNavigationOptions: {
      // headerRight: <View />,
      // headerTitle: <Image source={logo} style={styles.logo} resizeMode={"contain"} />,
      headerTintColor: "#fff",
      headerTransparent: true,
    }
  }
))