import React from "react";
import Button from "../rainfall data/rainfalldata.js";
import { View, Text, StyleSheet } from "react-native";


export default function Rainfall(props) {
    return (
        
        <View style={styles.container}>
                 
           <View style={styles.window}>
                <Text>Caixa azul</Text>
            </View>
          
            <Text>Para terminar, insira a medição da chuva obtida através do seu pluviometro. Feito isso, clique em salvar e tudo pronto </Text>

            <View>
                <Text>Barra horizontal</Text>
            </View>
         
            <Button width={"100%"}
                onPress={values => handleSubmit(values)}
                value={"Salvar"} />
        
        </View>
        
       
        );
}
const styles = StyleSheet.create({ 
    window:{
        backgroundcolor: '#0040FF'
    },
    text:{
        fontsize: 18,
    }
});
