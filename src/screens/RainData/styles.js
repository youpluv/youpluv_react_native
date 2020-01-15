import styled from "styled-components";
import Layout from "../../constants/Layout";

const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: ${Layout.window.height};
`;

const Title = styled.Text`
  display: flex;
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
  display: flex;
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
const SlideVolume = styled.Text`
  width: 250px;
  display: flex;
  color: #ffffff;
  font-size: 10px;
  line-height: 17px;
  font-style: normal;
  text-align: center;
  padding: 0px 0px 15px 0px;
`;
export { Container, Title, Volume, SlideVolume };
