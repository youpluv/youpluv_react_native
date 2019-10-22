import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import images from "../../assets"
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Splash = ({navigation}) => {
  async function handleNavigate(route) {
    navigation.replace(route);
  }

  useEffect(()=>{
    setTimeout(()=>{
      handleNavigate('Login')
    },3000)
  },[])

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ImageBackground source={images.logo}
          contentInsetAdjustmentBehavior="automatic"
          resizeMode="center"
          style={styles.view}>
        </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%'
  },
  logo: {
    width: 200,
    height: 57
  }
});

export default Splash;
