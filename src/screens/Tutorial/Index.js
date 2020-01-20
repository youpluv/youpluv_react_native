import React, { useState } from "react";
import { Container, MyText, Content, Button } from './styles'
import Materiais from '../../assets/images/IntroductTutorial.png'

import Steps from './TutorialSteps/TutorialSteps'
import { Text, Image } from "react-native";

const Introduction = (props) =>{
  return (
      <Container>
        <Content>
          <MyText>
          Antes de começar, separe os materiais que você irá precisar:
          </MyText>
          <Image style={{width:320,height:300, borderRadius:25}} source={Materiais}/>
          <Button onPress={props.onPress}>
          <Text style={{fontWeight: 'bold', fontSize: 14, color:'#EFEFEF'}}>COMEÇAR!</Text>
          </Button>
        </Content>
    </Container>
  )
}

export default function Tutorial(props) {
  const [step, setStep] = useState(0);

  return step === 0 ? <Introduction onPress={()=> setStep(1)}/> : <Steps/>
}
