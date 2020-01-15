import React, { useState } from "react";
import { Container, Title, Volume, SlideVolume } from "./styles";
import Button from "../../../components/Button";
import CustomGradient from "../../../components/CustomGradient";
import { Image, Slider } from "react-native";

export default function RainData(props) {
  const [value, setValue] = useState(1);
  const [volumeFinal, setVolumeFinal] = useState(20);
  return (
    <CustomGradient>
      <Container>
        <Image
          style={{ width: 100, height: 200 }}
          source={{
            uri:
              "https://trello-attachments.s3.amazonaws.com/5e109bb228ead90bc0732fa6/348x664/35e19de499e75d212b2b186fc99004a7/pluvvv_1.png"
          }}
        />
        <Volume>{value} mm</Volume>
        <Slider
          style={{
            width: 269,
            height: 70
          }}
          value={value}
          onValueChange={value => setValue(value.toFixed())}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="#FFF"
          minimumTrackTintColor="#FFF"
        />
        <SlideVolume style={{ justifyContent: "space-between" }}>
          {`${0} mm                                                      ${20} mm`}
        </SlideVolume>
        <Title>Clique em salvar e tudo pronto.</Title>
        <Button onPress={props.prev} bgColor={"#116682"} box textColor={"#fff"}>
          Salvar
        </Button>
      </Container>
    </CustomGradient>
  );
}
