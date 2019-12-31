import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { Container } from './styles';

export default function News() {
  return (
    <View
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text>Hello News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
