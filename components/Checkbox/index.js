import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';
import { CheckBox } from 'react-native-elements'

export default function Checkbox({label}) {
  return (
    <Container onPress={action}>
        <CheckBox title={{label}} textStyle={{color: '#fff'}}/>
    </Container>
  );
}
