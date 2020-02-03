import React from 'react';
import { View, Text } from 'react-native';

import { Container, Content, Title, SubText } from './styles';
import Animation from './Animation'
export default function Registrie(props) {
  return (
    <Container>
        <Content>
            <View style={{flexDirection:'row'}}>
                <Title style={{paddingRight:8}}>Volume da chuva</Title>
                <Title>{+props.volume +"mm"}</Title>
            </View>
            <View>
                    <SubText>Início:{props.initial_date}</SubText>
                    <SubText>Final: {props.final_date}</SubText>
            </View>
        </Content>
        <Animation volume={props.volume}/>
    </Container>
  );
}
