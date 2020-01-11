import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import { Container, Content, MyText, Img} from './styleCard';
import background from '../../assets/images/backgroundTuto.png';
import { withNavigation } from 'react-navigation';

function CardTutorial(props) {
  return (
      <Img resizeMode={'cover'} imageStyle={{borderRadius:20}} source={background}>
    <Container>
        <Content>
          <MyText>Aprenda a construir seu próprio pluviômetro.</MyText>
          <MyText>É fácil, e com materiais que você tem em casa.</MyText>
            <TouchableOpacity onPress={() => props.navigation.navigate("Tutorial")} style={styles.button}>
              <MyText button>VAMOS LÁ</MyText>
            </TouchableOpacity>
        </Content>
    </Container>
      </Img>
  );
}

const styles = StyleSheet.create({
  button:{
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal:30,
    marginTop:8,
  }
})

export default withNavigation(CardTutorial)