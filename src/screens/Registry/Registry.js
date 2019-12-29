import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Registry() {
  return (
  <View
    style={styles.container}
    contentContainerStyle={styles.contentContainer}
    >
    <Text>Hello Registry</Text>
  </View>
  );
}

Registry.navigationOptions = {
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