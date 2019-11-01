import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import logo from "../../assets/images/logo.png";
import Button from '../../components/Button';
import Input from '../../components/Input/Input';

export default function Login(props) {
  return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode={'contain'}/>
      <View style={styles.containerForm}>
       <Input placeholder="email" color="white" iconName="email"/>
       <Input placeholder="senha" color="white" iconName="lock"/>
          <Button  onPress={() => props.navigation.navigate('Main')}/>
      </View>
      </View>
  );
}

Login.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  logo: {
    width: 400,
    maxWidth: '70%',
    height: 100,
    marginBottom: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#a7e9ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    width: '100%',
    maxWidth: 450,
    alignItems: 'center',
    paddingHorizontal: 30 
  }
});
