import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {
    DrawerItems,
    createDrawerNavigator
} from 'react-navigation';

import { useDispatch } from "react-redux";

import { removeUser } from "../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";

import TabBarIcon from './TabBarIcon'

import Home from '../screens/Home/Home';
import Tutorial from '../screens/Tutorial/Tutorial';


import {LinearGradient} from 'expo-linear-gradient';
import Layout from '../constants/Layout';
import Login from '../screens/Login/Login';

const MyContentComponent = props => {
    const dispatch = useDispatch();
    
    const logout = () => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        });
        dispatch(removeUser());
        props.navigation.dispatch(resetAction);
      };

    return (
        <SafeAreaView 
            style = {styles.container}
            forceInset = {{
            top: 'always',
            horizontal: 'never'}}
        >
            <LinearGradient 
            colors = {['#30ABD2', '#116682']}
            style = {{height: Layout.window.height}}>
                
                <DrawerItems {...props} onItemPress={Login, logout}/>

            </LinearGradient > 
        </SafeAreaView>
)}

const SideMenu = createDrawerNavigator({
    Tutorial:{
        screen:Tutorial,
        navigationOptions: () => ({
            drawerIcon: 
                <TabBarIcon 
                name="tools" 
                type="entypo" 
                size={20} 
                color='white'
            /> ,
        }),
    },
    Sair: {
        screen:Home,
        navigationOptions: () => ({
            drawerIcon:
                <TabBarIcon name = "logout"
                type = "MaterialCommunityIcons"
                size = {20}
                color = 'white' 
            /> ,
        }),
    },
}, {
    contentComponent: MyContentComponent,
    drawerType: 'slide',
    edgeWidth: 100,
    drawerWidth: Layout.window.width,
    contentOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white',
    },
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default SideMenu