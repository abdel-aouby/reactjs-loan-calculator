import React, { useState } from "react";
import LoanContainer from "../../loanAmount/container/loanContainer";
import PeriodContainer from "../../loanPeriod/container/periodContainer";
import "./style.css";

function LoanResult(props) {
  const [currency] = useState("Kč");
  const [interest] = useState(3);
  const [amountValue, setLoanAmount] = useState(6000);
  const [periodValue, setPeriodAmount] = useState(5);

  function calculateLoan() {
    let calcInterst = interest / 100;

    return (
      (((calcInterst / 12) * Math.pow(1 + calcInterst / 12, periodValue)) /
        (Math.pow(1 + calcInterst / 12, periodValue) - 1)) *
      amountValue
    ).toFixed(2);
  }

  return (
    <div className="result-container">
      <div className="loan-info">
        <LoanContainer
          currency={currency}
          value={amountValue}
          onChangeValue={setLoanAmount}
        />
        <PeriodContainer value={periodValue} onChangeValue={setPeriodAmount} />
      </div>

      <div className="result">
        <h3>Vaše výhodná půjčka:</h3>
        <div>
          Měsíčně: {calculateLoan()} {currency}
        </div>
      </div>
    </div>
  );
}

export default LoanResult;
