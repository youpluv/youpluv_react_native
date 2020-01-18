import styled from "styled-components";
import Layout from "../../../constants/Layout";

const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: ${Layout.window.height};
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  text-align: center;
  align-items: center;
  margin-bottom: 25px;
  font-family: "montserrat-semi-bold";
`;
const Volume = styled.Text`
  color: #ffffff;
  font-size: 24px;
  margin-top: 23px;
  line-height: 29px;
  font-style: normal;
  text-align: center;
  margin-bottom: 14px;
  align-items: center;
  font-family: "montserrat-semi-bold";
`;
const SlideVolume = styled.View`
  width: 250px;
  flex-direction: row;
  padding: 0px 0px 15px 0px;
  justify-content: space-between;
  margin-top: -25px;
`;
const VolumeText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  line-height: 17px;
  font-style: normal;
  font-family: "montserrat-semi-bold";
`;
export { Container, Title, Volume, SlideVolume, VolumeText };
