import React from 'react';

const App = () => (
  <Amount>
    {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);

const Amount = ({ children }) => {
  const [amount, setAmount] = React.useState(0);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    setAmount(amount - 1);
  };

  return (
    <div>
      <span>US Dollar: {amount} </span>

      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>

      {children(amount)}
    </div>
  );
};

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;
