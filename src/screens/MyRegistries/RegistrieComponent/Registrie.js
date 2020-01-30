import React from 'react';
import { View, Text } from 'react-native';

import { Container, Content, Title, SubText } from './styles';

export default function Registrie(props) {
  return (
    <Container>
        <Content>
            <View style={{flexDirection:'row'}}>
                <Title>Volume da chuva</Title>
                <Title style={{paddingHorizontal:15}}>{props.volume}</Title>
            </View>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <SubText>Início: {props.intital_date}</SubText>
                    <Text style={{paddingHorizontal:15, color:'#7E7E7E'}}>-</Text>
                    <SubText>{props.intital_hour}</SubText>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <SubText>Final: {props.final_date}</SubText>
                    <Text style={{paddingHorizontal:15, color:'#7E7E7E'}}>-</Text>
                    <SubText>{props.final_hour}</SubText>
                </View>
            </View>
        </Content>
    </Container>
  );
}
