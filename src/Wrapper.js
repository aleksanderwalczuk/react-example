import { useState } from "react";
import * as templates from "./Templates";

export default function Wrapper() {
  const [step, setStep] = useState(0);

  const templatesArr = Object.values(templates);

  function incStep() {
    if (step < templatesArr.length - 1) {
      setStep(step + 1);
    }
  }
  function decStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  if (templatesArr.length === 0) {
    return (
      <div>
        <p>Current step: {step}</p>
        <p>Sorry, no templates to render :( </p>
      </div>
    );
  }
  return (
    <div>
      <p>Current step: {step}</p>
      <div>
        <button onClick={decStep}>Prev</button>
        <button onClick={incStep}>Next</button>
      </div>
      {templates && templatesArr[step]
        ? templatesArr.map((TemplateComponent, index) => {
            if (step === index) {
              return <TemplateComponent key={index} />;
            }
            return null;
          })
        : null}
    </div>
  );
}
