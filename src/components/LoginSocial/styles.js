import styled from "styled-components";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 21px;
  display: flex;
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-evenly;
`;
const Content = styled.TouchableOpacity`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const Circle = styled.View`
  width: 57px;
  height: 57px;
  display: flex;
  margin-top: 50px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
`;
const H2 = styled.Text`
  /* font-family: Montserrat; */
  width: 75px;
  height: 40px;
  color: #ffffff;
  font-size: 14px;
  flex-wrap: wrap;
  margin-top: 5px;
  line-height: 17px;
  font-style: normal;
  text-align: center;
  font-weight: normal;
`;
const IconFacebook = styled(FontAwesome)`
  display: flex;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
`;
const IconGoogle = styled(MaterialCommunityIcons)`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
`;
export { Container, Content, Circle, H2, IconFacebook, IconGoogle };
