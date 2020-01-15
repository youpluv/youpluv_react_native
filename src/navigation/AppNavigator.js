import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import MainTabNavigator from "./MainTabNavigator";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import ResetPassword from "../screens/ResetPassword/ResetPassword";
import Tutorial from "../screens/Tutorial/Tutorial";
import logo from "../assets/images/logo.png";
import SideMenu from '../components/SideMenu';
import Home from '../screens/Home/Home';
import Registry from '../screens/Registry/Registry';
import News from '../screens/News/News';
import TabBarIcon from '../components/TabBarIcon'
import MyContentComponent from '../components/SideMenu';
import Layout from '../constants/Layout'

const stack = createAppContainer(
  createStackNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: Login,
    Register: Register,
    ResetPassword: ResetPassword,
    Tutorial:Tutorial,
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

const tab = createAppContainer(
  createBottomTabNavigator({
    home:Home,
    Registry:Registry,
    News:News,
  })
)
const drawer = createAppContainer(
  createDrawerNavigator({
    Home:{
      screen:stack,
      navigationOptions: () => ({
          drawerIcon: 
              <TabBarIcon 
              name="md-home" 
              type="ionicons" 
              size={20} 
              color='white'
          />,
      }),
  },
  Tutorial:{
    screen:Tutorial,
    navigationOptions: () => ({
        title:'Tutorial Pluviômetro',
        drawerIcon: 
            <TabBarIcon 
            name="tools" 
            type="entypo" 
            size={20} 
            color='white'
        />,
    }),
  },
},{
  contentComponent: MyContentComponent,
  drawerType: 'slide',
  edgeWidth: 100,
  drawerWidth: Layout.window.width,
  contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
  },
})
)
export default drawer