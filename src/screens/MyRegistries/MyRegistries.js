import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { MyTitle } from "./styles";
import Registrie from "./RegistrieComponent/Registrie";
import LoadingNews from "../../components/LoadingNews";
import moment from 'moment'
import { getRainData } from "../../store/rain/rain.action";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

export default function MyRegistries() {
  const newsStore = useSelector(state => {
    return state.rain;
  });
  const data = newsStore.data || [];
  const { error, loading } = newsStore;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRainData());
  }, []);

  const formatDate = dateTime => {
    return moment(dateTime).format("DD/MM/YYYY   -   HH:mm");
  };

  return loading ? (
    <LoadingNews />
  ) : data.length <= 0 ? (
    <LinearGradient
      colors={['#005D7B','#A7E9FF']}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30
      }}
    >
      <MyTitle>Meus Registros</MyTitle>
      <Text style={{ color: "#B3B3B3", fontSize: 16 }}>
        NÃO HÁ REGISTROS
      </Text>
    </LinearGradient>
  ) : (
    <LinearGradient
      colors={['#005D7B','#A7E9FF']} 
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <MyTitle>Meus Registros</MyTitle>
      <ScrollView style={{ width: "100%", height: "100%" }}>
        {data.map((registrie, index) => (
          <Registrie
            key={index}
            volume={registrie.rain_data}
            initial_date={formatDate(registrie.initial_date)+'h'}
            final_date={formatDate(registrie.final_date)+'h'}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
