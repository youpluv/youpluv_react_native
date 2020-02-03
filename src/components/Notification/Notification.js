import React from "react";
import { Notifications } from "expo";

import { View } from "react-native";
import { useEffect } from "react";
import { setNotification } from "../../store/news/news.actions";
import { useDispatch } from "react-redux";

// import { Container } from './styles';

export default function Notification() {
  const dispatch = useDispatch();

  const handleNotification = notification => {
    // do whatever you want to do with the notification
    dispatch(setNotification(notification));
    console.log(notification);
  };

  useEffect(() => {
    Notifications.addListener(handleNotification);
  }, []);

  return <View />;
}
