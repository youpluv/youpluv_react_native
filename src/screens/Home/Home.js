import React, { useEffect } from "react";

import { Container, Content, Image } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { removeUser, setGeolocation } from "../../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";
import DayNight from "./DayNight";
import Layout from "../../constants/Layout";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import CardTutorial from "../../components/CardTutorial/CardTutorial";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { getWeather } from "../../store/weather/weather.action";

export default function Home(props) {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather.data);
  const region = useSelector(state => state.weather.region);

  const notification = useSelector(state => state.news.notification);

  useEffect(() => {
    console.log("NEWS NOTIFICATION :: ", notification);
    if (
      notification &&
      notification.data &&
      notification.data.type === "message" &&
      notification.origin === "selected"
    ){
      props.navigation.navigate("NewsStack", notification);
    }
  }, [notification]);

  useEffect(() => {
    _getLocationAsync();
  }, []);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    await Location.getCurrentPositionAsync({}).then(location => {
      dispatch(setGeolocation(location.coords));
      Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }).then(region => {
        dispatch(getWeather(region.pop().region));
      });
      console.log(location, "location atual");
    });
  };

  const logout = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    dispatch(removeUser());
    props.navigation.dispatch(resetAction);
  };
  return (
    <Container>
      <DayNight {...props} />
      <Content>
        <WeatherCard
          data={weather}
          region={region}
          containerStyle={{ marginTop: Layout.isSmallDevice ? -115 : -80 }}
        />
        <CardTutorial />
        <Image
          source={require("../../assets/images/call-to-insert.png")}
          resizeMode={"contain"}
        />
      </Content>
    </Container>
  );
}
