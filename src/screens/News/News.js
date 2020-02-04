import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  BackImag,
  Notice,
  Notices,
  ModalContainer,
  Content,
  TextNotice,
  TextModalNotice,
  TitleModalNotice
} from "./styles";

import { getNews } from "../../store/news/news.actions";
import { useDispatch, useSelector } from "react-redux";
import LoadingNews from "../../components/LoadingNews";
import { clearNotification } from "../../store/news/news.actions";
import { AntDesign } from "@expo/vector-icons";

function News(props) {
  const newsStore = useSelector(state => {
    return state.news;
  });
  const { error, loading } = newsStore;
  const notification = useSelector(state => state.news.notification);

  const news = newsStore.data;

  const [myNotice, setMyNotice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  useEffect(() => {
    const noticeId = notification && notification.data && notification.data.id;
    console.log("FORA DO IF :: ", notification, news);
    if (noticeId && news.find(notice => notice.id === noticeId)) {
      console.log("DENTRO DO IF :: ", notification, news);
      getNotice(noticeId);
      dispatch(clearNotification());
    }
  }, [news, notification]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getNotice = id => {
    setMyNotice(news.find(notice => notice.id === id));
    toggleModal();
  };

  return loading ? (
    <LoadingNews />
  ) : (
    <Container>
      <ScrollView>
        <Notices>
          {news.map((notice, index) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={() => getNotice(notice.id)}
            >
              <BackImag
                large={index % 4}
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: notice.image }}
              >
                <Notice large={index % 4}>
                  <TextNotice large={index % 4}>{notice.title}</TextNotice>
                </Notice>
              </BackImag>
            </TouchableOpacity>
          ))}
        </Notices>
      </ScrollView>

      {!!myNotice && (
        <ModalNews
          image={myNotice.image}
          title={myNotice.title}
          description={myNotice.description}
          show={showModal}
          onClose={() => toggleModal()}
        />
      )}
    </Container>
  );
}

const ModalNews = props => {
  return (
    <ModalContainer show={props.show} onPress={props.onClose}>
      <View onStartShouldSetResponder={() => true}>
        <View
          style={{
            backgroundColor: "white",
            width: 300,
            height: 500,
            borderRadius: 8
          }}
        >
          <View style={{ position: "absolute", right: 0, zIndex: 10 }}>
            <TouchableOpacity onPress={props.onClose}>
              <AntDesign
                name={"close"}
                style={{
                  width: 20,
                  height: 20,
                  margin: 6,
                  fontSize: 20,
                  color: "#fff"
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                width: "100%",
                height: Dimensions.get("window").width / 2,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8
              }}
              source={{ uri: props.image }}
            />
            <Content>
              <ScrollView>
                {/* <WebView
                  source={{
                    html: props.description
                  }}
                  style={{ marginTop: 20 }}
                /> */}
                <TitleModalNotice>{props.title}</TitleModalNotice>
                <TextModalNotice>{props.description}</TextModalNotice>
              </ScrollView>
            </Content>
          </View>
        </View>
      </View>
    </ModalContainer>
  );
};

export default News;
