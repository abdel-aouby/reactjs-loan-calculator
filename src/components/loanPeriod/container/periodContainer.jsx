import React, { useState } from "react";
import LoanInput from "../../inputs/input";
import minMaxValueValidate from "../../../helpers/validators/maxMinValue";

function LoanPeriod(props) {
  const [minValue] = useState(3);
  const [maxValue] = useState(24);
  const [minUnit] = useState("měsíce");
  const [maxUnit] = useState("měsíců");
  const [periodValue, setPeriodValue] = useState(props.value);

  function handleValue(min, max, value) {
    const validValue = minMaxValueValidate(min, max, value);
    setPeriodValue(validValue);
    props.onChangeValue(validValue);
  }

  function handlePeriodString(value) {
    const months = value % 12;
    const years = Math.floor(value / 12);
    let monthsExpression = "";
    let yearsExpression = "";

    if (months > 0) {
      if (months === 1) monthsExpression = `${months} měsíc`;
      else if (months < 5) monthsExpression = `${months} měsíce`;
      else monthsExpression = `${months} měsíců`;
    }

    if (years > 0) {
      if (years > 1) yearsExpression = `${years} roky`;
      else yearsExpression = `${years} rok`;
    }

    if (monthsExpression && yearsExpression)
      return `${yearsExpression} a ${monthsExpression}`;

    return `${yearsExpression} ${monthsExpression}`;
  }

  return (
    <div className="loan-period-container">
      <h1>Délkou splácení si určete výšku splátky</h1>

      <div>{handlePeriodString(periodValue)}</div>

      <LoanInput
        type="range"
        min={minValue}
        max={maxValue}
        minUnit={minUnit}
        maxUnit={maxUnit}
        value={props.value}
        onInput={(event) => handleValue(minValue, maxValue, event.target.value)}
      />
    </div>
  );
}

export default LoanPeriod;
