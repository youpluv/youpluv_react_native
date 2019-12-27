import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Button";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser } from "../../store/user/user.actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUser());
  }, []);
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button />
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
