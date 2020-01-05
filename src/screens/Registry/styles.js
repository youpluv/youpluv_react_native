import styled from "styled-components";

const Container = styled.View`
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  background-color: #499ab5;
`;

const Title = styled.Text`
  color: #0d0d0d;
  font-size: 16px;
  text-align: center;
`;

const Div = styled.View`
  width: 296px;
  height: 40px;
  display: flex;
  background: #f7f7f7;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid #f9f9f9;
`;

const H2 = styled.Text`
  color: #292929;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  font-style: normal;
  text-align: center;
  font-family: "Montserrat";
`;
const Content = styled.TouchableOpacity`
  width: 140px;
  height: 40px;
  display: flex;
  background: #116682;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  text-shadow: 0px 4px 4px rgba(248, 247, 247, 0.25);
`;
const TextBtn = styled.Text`
  color: #efefef;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  text-align: center;
  font-style: normal;
  font-family: "Montserrat";
`;
export { Container, Title, Div, H2, Content, TextBtn };
