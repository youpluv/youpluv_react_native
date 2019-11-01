import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styled from 'styled-components'
import Colors from '../constants/Colors'



export default Button = (props) => {
    const {value= 'ENTRAR'}= props;
    return <ContainerButton onPress={props.onPress}>
                <Label>{value}</Label>
            </ContainerButton>
}

const ContainerButton = styled.TouchableOpacity`
   width: 50%;
   height: 46;
   margin: 20px 0px;
   border-radius: 23;
   padding: 0px 20px;
   background-color: #DFE8EB;
   align-items: center;
   justify-content: center;
`
const Label = styled.Text`
   font-size: 14px;
   text-align: center;
   justify-content: center;
   font-style: normal;
   font-weight: 600;
   line-height: 17;
   color: #292929;
`
