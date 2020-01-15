import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Home from "../screens/Home/Home";
import Registry from "../screens/Registry/Registry";
import MyRegistries from "../screens/MyRegistries/MyRegistries";
import News from "../screens/News/News";
import Configuration from "../screens/Configuration/Configuration";
import Cloud from "../screens/Cloud/Cloud";
import CloudImg from "../components/CloudIMG";
import SideMenu from '../components/SideMenu';
import MoreComponent from '../components/MoreComponent';

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {
    headerMode: "none"
  }
});

const HomeStack = createStackNavigator(
  {
    Home: Home
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "white",
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: "#2FA8CF"
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type="ionicons"
      size={24}
      style={{ marginBottom: -3 }}
      focused={focused}
      name={"md-home"}
    />
  )
};

HomeStack.path = "";

const MyRegistriesStack = createStackNavigator(
  {
    MyRegistries: MyRegistries
  },
  config
);

MyRegistries.navigationOptions = {
  tabBarLabel: "Registros",
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "white",
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: "#2FA8CF"
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type="entypo"
      size={24}
      style={{ marginBottom: -3 }}
      focused={focused}
      name={"list"}
    />
  )
};

MyRegistries.path = "";

const CloudStack = createStackNavigator(
  {
    Registry
  },
  config
);

CloudStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarOptions: {
    activeTintColor: "",
    inactiveTintColor: "#FFF",
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: "#2FA8CF"
    }
  },
  tabBarIcon: props => <CloudImg {...props} />
};

CloudStack.path = "Cloud";

const NewsStack = createStackNavigator(
  {
    News: News
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: "Noticias",
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "white",
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: "#2FA8CF"
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size={24}
      style={{ marginBottom: -3 }}
      focused={focused}
      name={"newspaper-o"}
    />
  )
};

NewsStack.path = "";

const ConfigurationStack = createStackNavigator(
  {
    Configuration: SideMenu
  },
  config
);

ConfigurationStack.navigationOptions = {
  tabBarLabel: 'Mais',
  tabBarOptions: {
    activeTintColor: "#000",
    inactiveTintColor: "white", 
    labelStyle: { fontSize:10 }, 
    style: { backgroundColor: "#2FA8CF" },
  },
    tabBarIcon: ({ focused }) => (
      <MoreComponent
      focused={focused}
    />
    ) 
  };                
ConfigurationStack.path = "";

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
  MyRegistries,
  CloudStack,
  NewsStack,
  ConfigurationStack
});

tabNavigator.path = "";

export default tabNavigator;
