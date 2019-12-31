import React, {useState} from 'react';
import {View, Image} from 'react-native'
import { Container, Content, MyText, Temperature, MyImage, MyDate, Location, MyLine} from './CardStyle';

import CloudSun from '../../assets/images/CloudSun.png'
import locationIMG from '../../assets/images/locationIMG.png'

export default function WeatherCard(props) {
  return (
    props.horizontal ?
    <Container background={props.background}>

        <Location>
          <MyImage loc source={locationIMG}/>
          <MyText loc>Guaratiba</MyText>
        </Location>

        <Temperature>
          <View style={{alignItems:"center", padding:6}}>
            <MyText temp>20°</MyText>
            <MyText temp_sub>18/23°c</MyText>
          </View>
          <MyImage style={{marginLeft:14}} source={CloudSun}/>
        </Temperature>

        <MyDate>
          <MyText date>Quinta-feira</MyText>
          <MyText loc>Novembro, 14</MyText>
        </MyDate>

    </Container>
    :
    <Container vertical background={props.background}>

        <Temperature>
          <View style={{alignItems:"center", padding:10}}>
            <MyText temp vertical>20°</MyText>
            <MyText temp_sub vertical>18/23°c</MyText>
          </View>
        </Temperature>
          <MyImage vertical source={CloudSun}/>

        <MyLine/>

        <MyDate>
          <MyText date vertical>Quinta-feira</MyText>
          <MyText loc vertical>Novembro, 14</MyText>
        </MyDate>

    </Container>
  );
}
