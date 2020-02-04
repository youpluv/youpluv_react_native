import React, { useState, useEffect } from "react";
import RangeTime from "./RangeTime/RangeTime";
import RainData from "./RainData/RainData";
import { useSelector, useDispatch } from "react-redux";
import { postRainData, clearRainData } from "../../store/rain/rain.action";
import moment from "moment";

export default function Registry(props) {
  const [step, setStep] = useState(0);
  const [ initialDate, setInitialDate] = useState();
  const [initialHour, setInitialHour] = useState();
  const [finalDate, setFinalDate] = useState();
  const [finalHour, setFinalHour] = useState();
  const [rainData, setRainData] = useState(1);
  const geolocation = useSelector(state => state.user.data.geolocation || {});
  const rain = useSelector(state => state.rain);
  const { success, isLoading } = rain;
  const dispatch = useDispatch();
  
  const sendData = () => {
    const body = {
      initial_date: new Date(initialDate),
      final_date: new Date(finalDate),
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
      rain_data: rainData
    };
    dispatch(postRainData(body));
  };

  useEffect(() => {
    if (success) {
      dispatch(clearRainData());
      setInitialState();
      props.navigation.navigate("HomeStack");
    }
  }, [success]);

  const setInitialState = () => {
    setInitialDate(new Date());
    setInitialHour(new Date());
    setFinalDate(new Date());
    setFinalHour(new Date());
    setRainData(1);
    setStep(0);
  };

  const next = () => setStep(1);
  const prev = () => setStep(0);
  return step === 0 ? (
    <RangeTime
      initialHour={initialHour}
      setInitialHour={setInitialHour}
      initialDate={initialDate}
      setInitialDate={setInitialDate}
      finalHour={finalHour}
      setFinalHour={setFinalHour}
      finalDate={finalDate}
      setFinalDate={setFinalDate}
      next={next}
    />
  ) : (
    <RainData
      rainData={rainData}
      setRainData={setRainData}
      sendData={sendData}
      prev={prev}
    />
  );
}

// initial_date,
// final_date,
// latitude,
// longitude,
// rain_data
