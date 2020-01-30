import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image, ScrollView} from "react-native";

import { Container, BackImag, Notice, Notices, ModalContainer, Content, TextNotice } from './styles';

import close from '../../assets/images/close.png';
import { getNews } from "../../store/news/news.actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingNews from "../../components/LoadingNews";

export default function News(props) {

  const newsStore = useSelector(state => {
   return state.news
  });
  const { error, loading } = newsStore;

  const news = newsStore.data;

  const [myNotice, setMyNotice] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getNews())
  }, [])

  const toggleModal = ()=>{
    setShowModal(!showModal)
  }

  const getNotice = (i)=>{
    setMyNotice(news[i] || {})
    toggleModal()
  }

  return loading ? <LoadingNews/> : (
    <Container>
        <ScrollView>
          <Notices>
          {news.map((notice, index) => <TouchableOpacity activeOpacity={0.5} key={index} onPress={()=>getNotice(index)}>
            <BackImag large={index % 4} imageStyle={{ borderRadius: 10 }} source={notice.imagem}>
              <Notice large={index % 4}>
                <TextNotice large={index % 4}>{notice.title}</TextNotice>
              </Notice>
            </BackImag>
          </TouchableOpacity>)}
          </Notices>
        </ScrollView>

        <ModalNews
        img={myNotice.imagem}
        content={myNotice.content}
        show={showModal}
        onClose={()=> toggleModal()}
        />
    </Container>
  );
}

const ModalNews = (props) =>{
    return (
      <ModalContainer show={props.show} onPress={props.onClose}>
            <View onStartShouldSetResponder={()=> true}>
            <View style={{backgroundColor:'white', width:300, height:500, borderRadius:8}}>
                <View style={{position:'absolute', right:0}}>
                  <TouchableOpacity onPress={props.onClose}>
                    <Image style={{width:20, height:20, margin:6}} source={close}/>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop:20, width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                    <Image style={{width:300, height:150, borderRadius:8}} source={props.img}/>
                    <Content>
                      <ScrollView>
                        <Text style={{marginVertical:8}}>{props.content}</Text>
                      </ScrollView>
                    </Content>
                </View>
            </View>
            </View>
        </ModalContainer>
    )
}