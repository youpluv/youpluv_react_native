import React, { Component } from 'react'
import { View, StyleSheet, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'

export default class input extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <View style={styles.inputContainer}>
                <Icon 
                    name={this.props.iconName} 
                    iconStyle={[styles.icon, {height: this.props.height}]} 
                    color={this.props.color}
                />

                <TextInput 
                    style={[styles.default, {backgroundColor: this.props.color}]}
                    placeholder={this.props.placeholder} 
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
        minHeight: 30,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 10
    },
    default:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        paddingLeft: 10,
    },    
    icon:{
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 10,
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: 'transparent',
    }
});
   