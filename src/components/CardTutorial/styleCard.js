import styled, { css } from 'styled-components'

const Container = styled.View`
width:80%;
height:75%;
`
const Content = styled.View`
align-items:center;
`
const MyText = styled.Text`
color:#FFF;
font-size:20px;
text-align:center;
line-height: 22px;
font-weight:700;
margin-bottom:4;
${props=> props.button && css`
font-size:15px;
color:#E5E5E5;
margin-bottom:0;
`}
`

export { Container, Content, MyText}