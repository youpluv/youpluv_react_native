import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from '../../components/Button';

export default function Login(props) {
    console.log(props)
  return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
       
          <Button  onPress={() => props.navigation.navigate('Main')}/>

      </View>
  );
}

Login.navigationOptions = {
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
