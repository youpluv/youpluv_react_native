import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { MyTitle } from './styles'
import Registrie from './RegistrieComponent/Registrie';
import Loading from '../../components/Loading'

import { getRainData } from "../../store/rain/rain.action";
import { useDispatch, useSelector } from "react-redux";

export default function MyRegistries() {

  const newsStore = useSelector(state => {
    return state.rain
  });
  const data = newsStore.data;
  const { error, loading } = newsStore;

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getRainData())
  }, [])

  console.log(data)

  return loading ? <Loading/> : (
    data.length <= 0 ? 
    <View style={{flex:1, alignItems:'center', justifyContent:'flex-start', marginTop:30}}>
      <MyTitle>Meus Registros</MyTitle>
      <Text style={{marginTop:40, color:'#B3B3B3', fontSize:16}}>NÃO HÁ REGISTROS</Text> 
    </View>
    : 
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop:30}}>
      <MyTitle>Meus Registros</MyTitle>
      <ScrollView style={{width:'100%', height:'100%'}}>
        {data.map(registrie => <Registrie 
        volume={registrie.volume}
        intital_date={registrie.intital_date}
        intital_hour={registrie.intital_hour}
        final_date={registrie.final_date}
        final_hour={registrie.final_hour}
        />)}
      </ScrollView>
    </View>
  );
}
