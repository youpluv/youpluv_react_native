import React, { useState } from "react";
import { Container, Title, Volume, SlideVolume } from "./styles";
import Button from "../../components/Button";
import CustomGradient from "../../components/CustomGradient";
import { Image, Slider } from "react-native";

export default function RainData() {
  const [volumeInicial, setVolumeInicial] = useState(0);
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
        <Volume>{volumeInicial} mm</Volume>
        <Slider
          style={{
            width: 269,
            height: 30
          }}
          step={1}
          minimumValue={volumeInicial}
          maximumValue={volumeFinal}
          minimumTrackTintColor="#FFF"
          minimumTrackTintColor="#FFF"
          onSlidingComplete={setVolumeInicial}
        />
        <SlideVolume style={{ justifyContent: "space-between" }}>
          {`${volumeInicial} mm                                                                     ${volumeFinal} mm`}
        </SlideVolume>
        <Title>Clique em salvar e tudo pronto.</Title>
        <Button bgColor={"#116682"} box textColor={"#fff"}>
          Salvar
        </Button>
      </Container>
    </CustomGradient>
  );
}
