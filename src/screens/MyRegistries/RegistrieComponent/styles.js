import styled from 'styled-components';

const Container = styled.View`
width: 100%;
min-height: 70px;
border-bottom-color:#B3B3B3;
border-bottom-width:1px;
padding:10px;
`
const Content = styled.View`
margin-left:2px;
`
const Title = styled.Text`
color:#3E3E3E;
font-weight:700;
font-size:15px;
padding-vertical:2px;
`
const SubText = styled.Text`
width:120px;
color:#7E7E7E;
font-size:14px;
padding-vertical:2px;
`


export { Container, Content, Title, SubText}