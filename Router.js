import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native';

import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Register from './src/pages/Register/Register';
import Splash from './src/pages/Splash/Splash';

const Routes = createAppContainer(
  createStackNavigator(
    {
        Splash: { screen: Splash, navigationOptions: {header: null}},
        Login,
        Register,
        Home,
    },
    {
      headerBackTitleVisible: false,
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: "YouPluv",
        // headerTitle:(
        //     <Image></Image>
        // ),
        headerStyle: {
          height: 60,
            color: '#000',
            backgroundColor: '#0000ee',
        },
        headerTitleStyle:{
            color: '#000',
        },
        headerTintColor: '#000',
      },
    }
  )
);

export default Routes;
