import React, { useState } from "react";
import { Container, Title, Volume, SlideVolume, VolumeText } from "./styles";
import Button from "../../../components/Button";
import CustomGradient from "../../../components/CustomGradient";
import { Image, Slider, View } from "react-native";
import VolumeWater from "./VolumeWater/VolumeWater";
import { TouchableOpacity } from "react-native-gesture-handler";
import back from '../../../assets/images/back.png'

export default function RainData(props) {
  const br = `\n`;
  const { rainData, setRainData, prev } = props;
  return (
    <CustomGradient style={{paddingTop:20}} colors={["#015D7B", "#A7E9FF"]}>
      <View style={{position:"absolute", top:45, left:10}}>
        <TouchableOpacity onPress={prev}>
          <Image style={{width:28, height:28}} source={back}/>
        </TouchableOpacity>
      </View>
      <Container>
        <Title>
          Agora insira a medição da chuva {br} obtida através do seu
          pluviômetro.
        </Title>
        <View>
          <Image
            style={{ width: 100, height: 200 }}
            source={{
              uri:
                "https://trello-attachments.s3.amazonaws.com/5e109bb228ead90bc0732fa6/348x664/35e19de499e75d212b2b186fc99004a7/pluvvv_1.png"
            }}
          />
          <VolumeWater height={rainData} />
        </View>
        <Volume>{rainData} mm</Volume>
        <Slider
          width={269}
          height={55}
          value={rainData}
          onValueChange={value => setRainData(value.toFixed())}
          minimumValue={0}
          maximumValue={20}
          maximumTrackTintColor="#FFF"
          minimumTrackTintColor="#FFF"
          thumbTintColor="#116682"
          thumbTintSize={20}
        />
        <SlideVolume>
          <VolumeText> {`${0} mm `}</VolumeText>
          <VolumeText> {`${20} mm `}</VolumeText>
        </SlideVolume>
        <Title>Clique em salvar e tudo pronto.</Title>
        <Button
          onPress={props.sendData}
          bgColor={"#116682"}
          box
          textColor={"#fff"}
        >
          Salvar
        </Button>
      </Container>
    </CustomGradient>
  );
}
