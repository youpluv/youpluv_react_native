import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../../store/user/user.actions";
import { NavigationActions, StackActions } from "react-navigation";

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
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button onPress={logout}>Logout</Button>
    </View>
  );
}

Home.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
