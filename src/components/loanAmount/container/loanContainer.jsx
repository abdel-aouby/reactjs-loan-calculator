import React, { useState } from "react";
import LoanInput from "../../inputs/input";
import minMaxValueValidate from "../../../helpers/validators/maxMinValue";

function LoanAmount(props) {
  const [minValue] = useState(5000);
  const [maxValue] = useState(30000);
  const [loanValue, setInputValue] = useState(props.value);
  const [currency] = useState(props.currency);

  function handleValue(min, max, value) {
    setInputValue(value);
    props.onChangeValue(minMaxValueValidate(min, max, value));
  }

  function handleBlur(min, max, value) {
    const validValue = minMaxValueValidate(min, max, value);
    if (validValue !== value) {
      alert(
        `Je nám líto, ale ${value} ${currency} Vám nemůžeme nabídnout, nejméně půjčujeme ${validValue} ${currency}.`
      );
    }

    setInputValue(validValue);
  }

  return (
    <div className="loan-amount-container">
      <h1>Kolik byste si u nás rádi půjčili?</h1>

      <LoanInput
        type="number"
        min={minValue}
        max={maxValue}
        unit={currency}
        value={loanValue}
        onInput={(event) => handleValue(minValue, maxValue, event.target.value)}
        onBlur={(event) => handleBlur(minValue, maxValue, event.target.value)}
      />
      <LoanInput
        type="range"
        min={minValue}
        max={maxValue}
        minUnit={currency}
        maxUnit={currency}
        value={loanValue}
        onInput={(event) => handleValue(minValue, maxValue, event.target.value)}
      />
    </div>
  );
}

export default LoanAmount;
