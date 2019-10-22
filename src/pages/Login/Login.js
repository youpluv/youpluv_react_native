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

const Login = ({navigation}) => {
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
          <TouchableHighlight onPress={()=>handleNavigate('Register')}>
            <Text>Ir para Cadastro</Text>
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

export default Login;
