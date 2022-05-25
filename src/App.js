import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalTipAmount, setTotalTipAmount] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [isCustomPercentage, setCustomPercentage] = useState(false);
  const [isResetActive, setResetActive] = useState("reset-button");

  useEffect(() => {
    if (bill && people && tipPercentage) {
      setTotalTipAmount((bill * tipPercentage) / 100);
    } else {
      console.log("invalid amount");
    }
  }, [bill, people, tipPercentage]);

  useEffect(() => {
    if (bill && people && tipPercentage) {
      setTipAmountPerPerson(totalTipAmount / people);
    } else {
      console.log("invalid amount");
    }
  }, [bill, people, tipPercentage, totalTipAmount]);

  return (
    <div className="App">
      <div className="table">
        <div className="bill-container">
          <div className="bill-form">
            <label>Bill</label>
            <input type="number" name="bill" value={bill} onChange={e => setBill(e.target.value)} />
          </div>
          <div className="select-tip">
            <label> Select tip %</label>
            <div className="buttons">
              <button value={5} onClick={e => setTipPercentage(e.target.value)}>
                5%
              </button>
              <button value={10} onClick={e => setTipPercentage(e.target.value)}>
                10%
              </button>
              <button value={15} onClick={e => setTipPercentage(e.target.value)}>
                15%
              </button>
              <button value={25} onClick={e => setTipPercentage(e.target.value)}>
                25%
              </button>
              <button value={50} onClick={e => setTipPercentage(e.target.value)}>
                50%
              </button>
              {isCustomPercentage ? (
                <input
                  className="custom-button-onclick-style"
                  type="number"
                  name="custom"
                  value={tipPercentage}
                  autoFocus
                  onChange={e => setTipPercentage(e.target.value)}
                  onClick={e => setCustomPercentage(false)}
                />
              ) : (
                <button id="custom-button-style" onClick={e => setCustomPercentage(true)}>
                  Custom
                </button>
              )}
            </div>
          </div>
          <div className="bill-form">
            <label>Number of people</label>
            <input
              type="number"
              name="people"
              value={people}
              onChange={e => setPeople(e.target.value)}
            />
          </div>
        </div>
        <div className="tip-container">
          <div className="tip-form">
            <div className="tip">
              <label>Tip amount</label>
              <span>{totalTipAmount.toFixed(2)}</span>
            </div>
            <div className="tip">
              <label>Per person </label>
              <span>{tipAmountPerPerson.toFixed(2)}</span>
            </div>
          </div>
          <div className="reset">
            <button
              id={isResetActive}
              onClick={() => {
                setBill(0);
                setPeople(0);
                setTotalTipAmount(0);
                setTipAmountPerPerson(0);
                setTipPercentage(0);
                setResetActive("reset-button-active");
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
