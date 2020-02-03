import styled from 'styled-components';

const Container = styled.View`
width: 95%;
height: 96px;
padding:10px;
background:white;
margin:8px;
border-radius:5px;
flex-direction:row;
justify-content:space-around;
`
const Content = styled.View`
margin-right:10px;
`
const Title = styled.Text`
color:#3E3E3E;
font-weight:700;
font-size:15px;
padding-vertical:2px;
`
const SubText = styled.Text`
min-width:10px;
color:#7E7E7E;
font-size:14px;
padding-vertical:2px;
`


export { Container, Content, Title, SubText}