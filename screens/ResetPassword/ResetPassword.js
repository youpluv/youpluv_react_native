import React from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Button from '../../components/Button';
import { Input } from 'react-native-elements';

export default function ResetPassword(props) {
  return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.textContainer}>
          <Text style={styles.TextsStyles2}>Esqueceu sua senha?</Text>
          <Text style={styles.TextsStyles2}>É fácil resolver.</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.TextsStyles}>Basta digitar o email cadastrado e clicar em </Text>
          <Text style={styles.TextsStyles2}>RECUPERAR SENHA.</Text>
          <Text style={styles.TextsStyles}>Em instantes você receberá o link no seu email.</Text>
        </View>


        <View style={styles.textContainer}>
        <Text style={styles.TextsStyles3}>Insira seu email no campo abaixo.</Text>
        </View>
          <Input color="white" iconName="email" />
          <Button  onPress={() => props.navigation.navigate('Main')}/>

      </View>
  );
}

ResetPassword.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2FA8CF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer:{
    padding:8,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  TextsStyles:{
    justifyContent: 'center',
    alignItems:'center',
    color:'#FFFFFF',
    fontSize:15,
  },
  TextsStyles2:{
    justifyContent: 'center',
    alignItems:'center',
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:"500",
  },
  TextsStyles3:{
    marginTop:10,
    justifyContent: 'center',
    alignItems:'center',
    color:'#FFFFFF',
    fontSize:15,
  }
});