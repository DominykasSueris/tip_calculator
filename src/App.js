import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [totalTipAmount, setTotalTipAmount] = useState(0);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [isCustomPercentage, setCustomPercentage] = useState(false);

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
                <div className="bill-custom">
                  <input
                    type="number"
                    name="custom"
                    value={tipPercentage}
                    autoFocus
                    onChange={e => setTipPercentage(e.target.value)}
                    onClick={e => setCustomPercentage(false)}
                  />
                </div>
              ) : (
                <button onClick={e => setCustomPercentage(true)}>Custom</button>
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
              <label>Total Tip Amount</label>
              <input type="text" name="tip-amount" value={totalTipAmount} />
            </div>
            <div>
              <div className="tip">
                <label>Tip per person </label>
                <input
                  type="number"
                  name="tip"
                  value={tipAmountPerPerson}
                  onChange={e => setTipAmountPerPerson(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="calculate">
            <button
              onClick={() => {
                setBill(0);
                setPeople(0);
                setTotalTipAmount(0);
                setTipAmountPerPerson(0);
                setTipPercentage(0);
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
