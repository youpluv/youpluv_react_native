import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Registry from '../screens/Registry/Registry'
import News from '../screens/News/News'
import Configuration from '../screens/Configuration/Configuration'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {  
    activeTintColor: '#000',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#2FA8CF',
    },
  },
  tabBarIcon: ({ focused}) => (
    <TabBarIcon
      Ionicons
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `md-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';


const RegistryStack = createStackNavigator(
  {
    Registry:Registry
  },
  config
);

RegistryStack.navigationOptions = {
  tabBarLabel: 'Registros',
  tabBarOptions: {  
    activeTintColor: '#000',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#2FA8CF',
    },
  },
  tabBarIcon: ({ focused}) => (
    <TabBarIcon
      Ionicons
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `md-menu${focused ? '' : '-outline'}`
          : 'md-menu'
          //ICONE A SER TROCADO
      }
    />
  ),
};

RegistryStack.path = '';

const NewsStack = createStackNavigator(
  {
    News: News
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'Noticias',
  tabBarOptions: {  
    activeTintColor: '#000',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#2FA8CF',
    },
  },
  tabBarIcon: ({ focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `newspaper-o${focused ? '' : '-outline'}`
          : 'newspaper-o'
          //ICONE A SER TROCADO
      }
    />
  ),
};

NewsStack.path = '';

const ConfigurationStack = createStackNavigator(
  {
    Configuration: Configuration
  },
  config
);

ConfigurationStack.navigationOptions = {
  tabBarLabel: 'Configurar',
  tabBarOptions: {  
    activeTintColor: '#000',
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#2FA8CF',
    },
  },
  tabBarIcon: ({ focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `gear${focused ? '' : '-outline'}`
          : 'gear'
      }
    />
  ),
};

ConfigurationStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  RegistryStack,
  NewsStack,
  ConfigurationStack,
});

tabNavigator.path = '';

export default tabNavigator;
