import React, { useState } from "react";
import Introduction from './TutorialIntroduct/Introduction'
import Steps from './TutorialSteps/TutorialSteps'

export default function Tutorial(props) {
  const [step, setStep] = useState(0);

  return step === 0 ? <Introduction onPress={() => setStep(1)} /> : <Steps />;
}
