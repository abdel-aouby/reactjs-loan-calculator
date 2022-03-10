import React from "react";
import "./style.css";

function Input(props) {
  return (
    <div>
      <div className="input-container">
        <input
          className="input-element"
          type={props.type}
          min={props.min}
          max={props.max}
          value={props.value}
          onInput={props.onInput}
          onBlur={props.onBlur}
        />
        {props.type === "number" && <span>{props.unit}</span>}
      </div>

      {props.type === "range" && (
        <div className="min-max-container">
          <div className="min-value">
            {props.min} {props.minUnit}
          </div>
          <div className="max-value">
            {props.max} {props.maxUnit}
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
