import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
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
import styled from 'styled-components';

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
                
            <DrawerItems {...props}/>
                <TouchableHighlight
                onPress={logout}
                underlayColor='#116682'
                activeOpacity={0.8}
                style={{flexDirection:'row', paddingVertical:15, backgroundColor:'rgba(0,0,0,0.03)'}}>
                    <>
                    <TabBarIcon
                    style={{paddingHorizontal:20, PaddingVertical:10}}
                    size={22}
                    name='logout'
                    type="MaterialCommunityIcons"/> 
                    <MyText>Sair</MyText>
                    </>
                </TouchableHighlight>
            </LinearGradient> 
        </SafeAreaView>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default MyContentComponent

const MyText = styled.Text`
color:white;
font-weight:700;
font-size:16;
padding-horizontal:15;
`