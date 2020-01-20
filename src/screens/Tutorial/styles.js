import styled from 'styled-components'

const Container = styled.View`
width:100%;
height:100%;
alignItems:center;
justifyContent:center;
`
const Content = styled.View`
alignItems:center;
justifyContent:center;
width:80%;
`

const MyText = styled.Text`
font-weight: 600;
font-size: 16px;
text-align: center;
color: #8B8B8B;
padding-bottom:40px;
`
const Button = styled.TouchableOpacity`
margin-top:25px;
padding-horizontal:35px;
padding-vertical:10px;
background:#11669B;
border-radius:20px;
`

export {
    Container,
    MyText,
    Content,
    Button
}