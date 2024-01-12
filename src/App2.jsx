import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((currentValue) => {
      return currentValue === 1 ? 3 : currentValue - 1;
    });
  }

  function handleNext() {
    setStep((currentValue) => {
      return currentValue === 3 ? 1 : currentValue + 1;
    });
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((currVal) => !currVal)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? 'active' : ''}>1</div>
            <div className={step === 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClickHandler={handlePrevious}
            >
              <span>⏮️</span> Previous
            </Button>

            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClickHandler={handleNext}
            >
              Next <span>⏭️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}

export default App;
