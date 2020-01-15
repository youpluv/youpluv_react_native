import React, { useState, useEffect } from "react";
import RangeTime from "./RangeTime/RangeTime";
import RainData from "./RainData/RainData";

export default function Registry(props) {
  const [step, setStep] = useState(0);
  const next = () => setStep(1);
  const prev = () => setStep(0);
  return step === 0 ? <RangeTime next={next} /> : <RainData prev={prev} />;
}
