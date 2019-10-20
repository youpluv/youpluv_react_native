import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

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
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Text>YouPluv</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
