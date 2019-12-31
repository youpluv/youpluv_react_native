import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import { Container, Content } from "./styles";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";
import DayNight from "./DayNight";

export default function Home(props) {
  const dispatch = useDispatch();

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
        <Button onPress={logout}>Logout</Button>
      </Content>
    </Container>
  );
}
