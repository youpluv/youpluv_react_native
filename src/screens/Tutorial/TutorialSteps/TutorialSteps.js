import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import Onboarding from "react-native-onboarding-swiper";

import TutorialComponent from "../TutorialComponent/TutorialComponent";

import passo1 from "../../../assets/images/passo1.png";
import passo2 from "../../../assets/images/passo2.png";
import passo3 from "../../../assets/images/passo3.png";
import passo4 from "../../../assets/images/passo4.png";
import passo5 from "../../../assets/images/passo5.png";

import { withNavigation } from "react-navigation";

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgb(52, 173, 211)" : "rgba(0, 0, 0, 0.1)";
  } else {
    backgroundColor = selected ? "#34ADD3" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  );
};

const Skip = ({ isLight, skipLabel, ...props }) => (
  <Button
    title={"Pular"}
    containerViewStyle={{
      marginVertical: 10,
      width: 70
    }}
    titleStyle={{ color: "#8B8B8B" }}
    type="clear"
    {...props}
  >
    {skipLabel}
  </Button>
);

const Next = ({ isLight, ...props }) => (
  <Button
    title={"Próximo"}
    containerViewStyle={{
      marginVertical: 10,
      width: 70
    }}
    titleStyle={{ color: "#8B8B8B" }}
    type="clear"
    {...props}
  />
);

function Steps(props) {
  return (
    <Onboarding
      DotComponent={Square}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      bottomBarColor={"#fff"}
      imageContainerStyles={{ paddingBottom: 0, marginBottom:10}}
      skipToPage={4}
      onDone={() => props.navigation.replace("drawer")}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <TutorialComponent
              Text={
                "Com o estilete, corte a garrafa PET na altura em que ela deixa de ser curva e começa a ficar reta, a uma distância aproximada de 10 centímetros do bico."
              }
              Image={passo1}
              styleImage={{ width: 250, height: 250 }}
            />
          ),
          title: "",
          subtitle: ""
        },
        {
          backgroundColor: "#fff",
          image: (
            <TutorialComponent
              Text={
                "Preencha cerca de 5 centímetros com as pedrinhas ou bolinhas de gude, e complete com água até cobrí-las. Cole um pedaço de fita na altura do nível da água, fazendo uma marca."
              }
              Image={passo2}
              styleImage={{ width: 120, height: 205 }}
            />
          ),
          title: "",
          subtitle: ""
        },
        {
          backgroundColor: "#fff",
          image: (
            <TutorialComponent
              Text={
                "Com a fita adesiva, fixe a régua na vertical na parte externa da garrafa. É importante que o número 0 da régua fique no mesmo nível da água. Com a ajuda do estilete, corte a parte da régua que ficar além da garrafa."
              }
              Image={passo3}
              styleImage={{ width: 140, height: 230 }}
            />
          ),
          title: "",
          subtitle: ""
        },
        {
          backgroundColor: "#fff",
          image: (
            <TutorialComponent
              Text={
                "Encaixe o bico da garrafa de ponta-cabeça dentro da abertura do pluviômetro."
              }
              Image={passo4}
              styleImage={{ width: 130, height: 270 }}
            />
          ),
          title: "",
          subtitle: ""
        },
        {
          backgroundColor: "#fff",
          image: (
            <TutorialComponent
              Text={
                "Coloque o pluviômetro em um lugar plano e aberto, sem que haja nada acima dele ou dos lados que impeça a chuva de atingí-lo. Após a chuva, basta conferir quantos milímetros o nível da água subiu na régua. Essa será a medida da chuva para o período em que a medição foi realizada."
              }
              Image={passo5}
              styleImage={{ width: 130, height: 205 }}
            />
          ),
          title: "",
          subtitle: ""
        }
      ]}
    />
  );
}

export default withNavigation(Steps);