import { useState } from 'react';

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [yourQuality, setYourQuality] = useState(0);
  const [friendQuality, setFriendQuality] = useState(0);

  function handleReset() {
    setBill(0);
    setYourQuality(0);
    setFriendQuality(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage quality={yourQuality} onSetQuality={setYourQuality}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage quality={friendQuality} onSetQuality={setFriendQuality}>
        How did your friend like the service ?
      </SelectPercentage>
      <Output
        bill={bill}
        yourQuality={yourQuality}
        friendQuality={friendQuality}
      />
      <Reset onHandleReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill ?
      <input
        type="number"
        value={bill ? bill : ''}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectPercentage({ quality, onSetQuality, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={quality}
        onChange={(e) => onSetQuality(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutly amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, yourQuality, friendQuality }) {
  const yourTip = yourQuality ? (yourQuality / 100) * bill : 0;
  const friendTip = friendQuality ? (friendQuality / 100) * bill : 0;
  const totalTip = (yourTip + friendTip) / 2;

  return <h3>{`You pay ₹${bill + totalTip} (₹100 + ₹${totalTip} tip)`}</h3>;
}

function Reset({ onHandleReset }) {
  return (
    <div>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  );
}

export default App;
