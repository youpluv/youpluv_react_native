import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { FormResetPass } from "../../components/Structure";
import Button from '../../components/Button';
import Input from "../../components/Input/Input";

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


        <FormResetPass>
        <Text style={styles.TextsStyles3}>Insira seu email no campo abaixo.</Text>
        
          <Input />
          <Button value={"RECUPERAR SENHA"} onPress={() => props.navigation.navigate('Main')}/>
        </FormResetPass>
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
    alignItems: 'center',
  },
  TextsStyles:{
    color:'#FFFFFF',
    fontSize:15,
  },
  TextsStyles2:{
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:"500",
  },
  TextsStyles3:{
    marginTop:10,
    color:'#FFFFFF',
    fontSize:15,
  }
});