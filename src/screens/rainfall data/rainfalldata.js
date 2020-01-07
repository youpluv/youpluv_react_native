import React, { useEffect } from "react";
import Button from "../rainfall data/rainfalldata.js";
import { View, Text, StyleSheet } from "react-native";


export default function sla(props){
    return (
        <View style={style.window}></View>
            
        <View style={style.texto}>
            <Text>Para encerar, insira a medicao da chuva obtida atraves do seu pluviometro.         Feito isso, clique em salvar e tudo pronto 
            </Text> 
        </View>
    <Button onPress={handleSubmit} />
        
    );
}
const styles = StyleSheet.create({ 
    window:{
        backgroundcolor: '#0040FF'
    }
});