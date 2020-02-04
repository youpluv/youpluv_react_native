import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
// import { Icon } from 'react-native-elements'
import { TouchableHighlight } from "react-native-gesture-handler";
import { Icon, IconLeft, MessageError } from "./styles";
export default class Input extends Component {
  state = {
    hidePassword: true
  };
  constructor(props) {
    super(props);
  }

  togglePassword = () => {
    this.setState(prevState => ({
      hidePassword: !prevState.hidePassword
    }));
  };

  render() {
    return (
      <View style={!this.props.error ? styles.inputContainer : styles.inputError}>
        <Icon style={{display:this.props.display}} name={this.props.iconName} color={this.props.backgroundColor} />

        <TextInput
          autoCompleteType={'off'}
          onBlur={this.props.onBlur}
          autoCapitalize={"none"}
          onChangeText={this.props.onChangeText}
          style={[
            styles.default,
            {
              backgroundColor: this.props.backgroundColor,
              color: this.props.color,
              borderTopLeftRadius:this.props.radiusLeft,
              borderBottomLeftRadius:this.props.radiusLeft,
            },
            this.props.iconLeftName && styles.borderRadiusRight
          ]}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderColor || "#979595"}
          secureTextEntry={
            this.props.secureTextEntry && this.state.hidePassword
          }
          textContentType={this.props.textContentType}
        ></TextInput>

        {this.props.iconLeftName && (
          <TouchableWithoutFeedback
            onPress={this.togglePassword}
            underlayColor="none"
          >
            <IconLeft
              style={{ backgroundColor: this.props.iconBackgroundColor }}
              name={this.props.iconLeftName}
              color={"#ccc"}
              // background={this.props.iconBackgroundColor}
            />
          </TouchableWithoutFeedback>
        )}
        {this.props.error && (
          <MessageError hasIcon={this.props.hasIcon}>
            {this.props.error}
          </MessageError>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    height: 45,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 25,
    elevation: 2,
  },
  inputError:{
    flexDirection: "row",
    height: 45,
    borderRadius: 30,
    borderColor: "#9A0000",
    borderWidth: 1.5,
    borderStyle: "solid",
    marginBottom: 25,
    elevation: 2
  },
  borderRadiusRight: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
    fontFamily: "montserrat-regular"
  },
  default: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    paddingLeft: 10,
    fontFamily: "montserrat-regular"
  },
  icon: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "transparent"
  },
  iconLeft: {
    fontSize: 22,
    padding: 10,
    // backgroundColor: 'transparent',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  }
});
