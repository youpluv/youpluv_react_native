import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';

import { Container, Content, MyText } from './styleCard';
import background from '../../assets/images/backgroundTuto.png';
import { withNavigation } from 'react-navigation';

function CardTutorial(props) {
  return (
      <ImageBackground resizeMode={'cover'} imageStyle={{borderRadius:20}} source={background} style={styles.img}>
    <Container>
        <Content>
          <MyText>Aprenda a construir seu próprio pluviômetro.</MyText>
          <MyText>É fácil, e com materiais que você tem em casa.</MyText>
            <TouchableOpacity onPress={() => props.navigation.navigate("Tutorial")} style={styles.button}>
              <MyText button>VAMOS LÁ</MyText>
            </TouchableOpacity>
        </Content>
    </Container>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img:{
    marginTop:5,
    width:340,
    height:190,
    justifyContent:'center',
    alignItems:'center'
  }, 
  button:{
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal:25,
    marginTop:8,
  }
})

export default withNavigation(CardTutorial)