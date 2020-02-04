import React, { useState, useReducer } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Image,
  TouchableHighlight
} from 'react-native';
import { ContainerForm } from "../../components/Structure";
import Button from '../../components/Button';
import Input from "../../components/Input/Input";
import iconX from "../../assets/images/iconX.png"
import iconCheck from "../../assets/images/iconCheck.png"

export default function ResetPassword(props) {

  const [modalVisible, setmodalVisible] = useState(false);

  const toggleModal = () => {
    setmodalVisible(!modalVisible);
 }

  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      
      <View style={styles.textContainer}>
        <Text style={styles.TextsStyles4}>Esqueceu sua senha?</Text>
        <Text style={styles.TextsStyles4}>É <Text style={{fontWeight:'700'}}>fácil</Text> resolver.</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.TextsStyles}>Basta digitar o email cadastrado e clicar em </Text>
        <Text style={styles.TextsStyles4}>RECUPERAR SENHA.</Text>
        <Text style={styles.TextsStyles}>Em instantes você receberá o link no seu email.</Text>
      </View>

      <ContainerForm>
        <Text style={styles.TextsStyles3}>Insira seu email no campo abaixo.</Text>        
        <Input color={'white'} display={'none'} radiusLeft={50} backgroundColor={'#2FA8CF'}/>
        <Button width="100%"  onPress={() => toggleModal()}>RECUPERAR SENHA</Button>
      </ContainerForm>

        <Modal
          animationType="fade"
          transparent={true}
          visible = {modalVisible}>
            <View style={styles.BackgroundModal}>
            <TouchableHighlight style={{position: 'absolute',left:304,top: 24,}} onPress={()=>toggleModal()}>
              <Image style={{width:40, height:40}} source={iconX}/>
            </TouchableHighlight>  
              <View style={styles.ModalStyle}>
              <Image style={{width:50, height:50}} source={iconCheck}/>
                <Text style={styles.TextModal1}>O email para recuperar sua senha foi enviado.</Text>
                <Text style={styles.TextModal2}>Enviamos para o email ad********i@gmail.com as instruções para recuperar a sua senha.</Text>
              </View>
            </View>
        </Modal>     

    </View>
  );
}

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
    fontFamily: "montserrat-regular",
    color:'#FFFFFF',
    fontSize:14,
    textAlign:'center',
  },
  TextsStyles2:{
    fontFamily: "montserrat-regular",
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:"500",
    textAlign:'center',
  },
  TextsStyles3:{
    fontFamily: "montserrat-regular",
    marginVertical:10,
    color:'#FFFFFF',
    fontSize:15,
    textAlign:'center',
  },
  TextsStyles4:{
    fontFamily: "montserrat-regular",
    color:'#FFFFFF',
    fontSize:18,
    fontWeight:"700",
    textAlign:'center',
    letterSpacing:0.8,
  },
  BackgroundModal:{
    width:400, 
    height:800, 
    backgroundColor: 'rgba(0, 0, 0, 0.53)'
  },
  ModalStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    width:300,
    height:200,
    borderRadius:30,
    marginTop:200,
    marginLeft:30,
    marginRight:30,
  },
  TextModal1:{
    padding:10,
    fontFamily: 'montserrat-regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    alignItems: 'center',
    textAlign: 'center',
    color: '#116682',
  },
  TextModal2:{
    padding:5,
    fontFamily: 'montserrat-regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    alignItems: 'center',
    textAlign: 'center',
    color:'#235A6E',
    minWidth:100,
    width:'90%',
  }
});