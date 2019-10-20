import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native';

import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Register from './src/pages/Register/Register';

const Routes = createAppContainer(
  createStackNavigator(
    {
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
          backgroundColor: '#0000ee',
        },
        headerTitleStyle:{
            color: '#fff',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
