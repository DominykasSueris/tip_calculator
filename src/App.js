import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [bill, setBill] = useState("0");
  const [people, setPeople] = useState("0");
  const [tip, setTip] = useState("0");
  const [amount, setAmount] = useState("0");
  const [tipPercentage, setTipPercentage] = useState("");
  const [customPercentage, setCustomPercentage] = useState(false);
  const [customAmount, setCustomAmout] = useState("0");

  const customTip = () => {
    setCustomPercentage(true);
    console.log("Clicked");
  };

  useEffect(() => {
    console.log(customPercentage);
  }, [customPercentage]);

  const tipInput = e => {
    console.log(e.target.value);
    if (setCustomPercentage === "true") {
      setCustomAmout(e.target.value);
    } else {
      setTipPercentage(e.target.value);
    }
  };

  const sum = (bill * tipPercentage) / 100;
  const tipAmount = sum / people;

  return (
    <div className="App">
      <div className="bill">
        <label>Bill</label>
        <input type="text" name="bill" value={bill} onChange={e => setBill(e.target.value)} />
      </div>
      <div className="people">
        <label>Number of people</label>
        <input type="text" name="people" value={people} onChange={e => setPeople(e.target.value)} />
        <div className="tip">
          <label>Tip</label>
          <input type="text" name="tip" value={tip} />
        </div>
        <div>
          <label> Select tip %</label>
          <button value={5} onClick={tipInput}>
            5%
          </button>
          <button value={10} onClick={tipInput}>
            10%
          </button>
          <button value={15} onClick={tipInput}>
            15%
          </button>
          <button value={25} onClick={tipInput}>
            25%
          </button>
          <button value={50} onClick={tipInput}>
            50%
          </button>
          <div>
            {customPercentage ? (
              <div className="bill">
                <input
                  type="text"
                  name="custom"
                  value={customAmount}
                  onChange={e => setCustomAmout(e.target.value)}
                />
              </div>
            ) : (
              <button onClick={customTip}>Custom</button>
            )}
          </div>
        </div>
        <div className="tip">
          <label>Tip amount</label>
          <input type="text" name="tip" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div className="calculate">
          <button
            onClick={() => {
              setTip(sum);
              setAmount(tipAmount);
            }}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
