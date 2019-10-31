import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import styled from 'styled-components'
import Colors from '../constants/Colors'

export default Button = () => {
    return <ContainerButton>
                <Label>ENTRAR</Label>
            </ContainerButton>
}

const ContainerButton = styled.TouchableOpacity`
    height: 30px;
    width: 100px;
    background-color: yellow;
    justify-content: center;
    align-items: center;
`
const Label = styled.Text`
    color: ${Colors.primaryColor};
`
