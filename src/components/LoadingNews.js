import React from "react";
import { View, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";
import { Animations } from "../assets/animations";

export default function LoadingNews(props) {

  return (
    <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          style={{
            width: 200,
            height: 200
          }}
          source={Animations.loadingNews}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        {/* <ActivityIndicator style={{marginHorizontal: 20}} size="large" color="#121212" />
            <Text>{text}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})