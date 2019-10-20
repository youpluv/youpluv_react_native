import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
  async function handleNavigate(route) {
    navigation.navigate(route);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TouchableHighlight onPress={()=>handleNavigate('Login')}>
            <Text>Ir para Login</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
