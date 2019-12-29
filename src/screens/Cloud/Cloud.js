import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Cloud() {
  return (
  <View
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    >
    <Text>Hello Cloud</Text>
  </View>
  );
}

Cloud.navigationOptions = {
header: null
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
}
});