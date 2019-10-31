import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from '../../components/Button';

export default function Home() {
  return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
       
          <Button />

      </View>
  );
}

Home.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
