import React, { Component } from 'react'
import { View, StyleSheet, TextInput} from 'react-native'
// import { Icon } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';

export default class Input extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View style={styles.inputContainer}>
                <MaterialIcons 
                    style={[styles.icon]}
                    name={this.props.iconName} 
                    color={this.props.backgroundColor}
                />



                <TextInput 
                    autoCapitalize={"none"}
                    onChangeText={this.props.onChangeText}
                    style={[styles.default, {backgroundColor: this.props.backgroundColor, color: this.props.color}]}
                    placeholder={this.props.placeholder} 
                    placeholderTextColor={this.props.placeholderColor || "#979595"}
                    secureTextEntry={this.props.secureTextEntry}
                    textContentType={this.props.textContentType}>
                </TextInput>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        height: 45,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 10,
        elevation: 2
    },
    default:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingLeft: 10,
        fontFamily: 'montserrat-regular'
    },    
    icon:{
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        fontSize: 20,
        padding: 10,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: 'transparent'
    }
});
   