import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import ResetPassword from '../screens/ResetPassword/ResetPassword';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login: {screen: Login},
    Register: {screen: Register},
    ResetPassword: {screen: ResetPassword},
    Main: MainTabNavigator,
  })
  
);
