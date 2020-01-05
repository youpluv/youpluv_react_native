import React, { useEffect } from "react";

import { Container, Content, Image} from "./styles";

import Button from "../../components/Button";
import { useDispatch, useSelector} from "react-redux";
import { removeUser } from "../../store/user/user.actions";
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
  const weather = useSelector( state => state.weather.data);
  console.log(weather)
  // state = {
  //   location: null,
  //   errorMessage: null
  // };

  useEffect(() => {
    // if (Platform.OS === "android" && !Constants.isDevice) {
    //   this.setState({
    //     errorMessage:
    //       "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
    //   });
    // } else {
    _getLocationAsync();
    // }
  }, []);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    await Location.getCurrentPositionAsync({}).then(location => {
      Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }).then(region => {
        dispatch(getWeather(region.pop().region));
        console.log(region, "location");
      });
      console.log(location, "location atual");
    });
    // this.setState({ location });
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
        <WeatherCard containerStyle={{ marginTop: -80 }} />
        <CardTutorial/>
        <Image
          source={require("../../assets/images/call-to-insert.png")}
          resizeMode={"contain"}
        />
      </Content>
    </Container>
  );
}
