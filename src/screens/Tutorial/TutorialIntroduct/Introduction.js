import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Container, MyText, Content, Button } from "./styles";
import close from '../../../assets/images/close.png'
import Materiais from "../../../assets/images/IntroductTutorial.png";
import { withNavigation } from 'react-navigation';

const Introduction = props => {
    return (
      <Container>
        <View style={{position:"absolute", top:45, left:10}}>
          <TouchableOpacity onPress={()=> props.navigation.goBack()}>
            <Image style={{width:20, height:20}} source={close}/>
          </TouchableOpacity>
        </View>
        <Content>
          <MyText>
            Antes de começar, separe os materiais que você irá precisar:
          </MyText>
          <Image
            style={{ width: 320, height: 300, borderRadius: 25 }}
            source={Materiais}
          />
          <Button onPress={props.onPress}>
            <Text style={{ fontWeight: "bold", fontSize: 14, color: "#EFEFEF" }}>
              COMEÇAR!
            </Text>
          </Button>
        </Content>
      </Container>
    );
  };

export default withNavigation(Introduction)