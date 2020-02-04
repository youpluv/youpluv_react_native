import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;
  width: 100%;
`;
const BackImag = styled.ImageBackground`
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: ${props => (props.large < 2 ? " 344px" : "168px")};
`;

const Notice = styled.View`
width:${props => (props.large < 2 ? "344px" : "168px")}
height: 200px;
background-color:rgba(0, 0, 0, 0.4);
justify-content:flex-end;
border-radius:10px;
`;

const TitleModalNotice = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  font-family: "montserrat-bold";
`;

const TextModalNotice = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font-family: "montserrat-regular";
`;

const TextNotice = styled.Text`
  font-family: "montserrat-bold";
  text-align: left;
  margin-left: 8px;
  color: white;
  font-size: ${props => (props.large < 2 ? "24px" : "16px")};
  line-height: ${props => (props.large < 2 ? "26px" : "18px")};
  height: ${props => (props.large < 2 ? 3 * 26 : 3 * 18)};
`;

const Notices = styled.View`
  width: 100%;
  flex-flow: row wrap;
  margin-top: 38px;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  left: ${props => (props.show ? 0 : 600)};
  position: absolute;
  z-index: 10000;
`;
const Content = styled.View`
  justify-content: flex-start;
  width: 92%;
  height: 64%;
`;

export {
  Container,
  BackImag,
  Notice,
  TextNotice,
  Notices,
  ModalContainer,
  Content,
  TitleModalNotice,
  TextModalNotice
};
