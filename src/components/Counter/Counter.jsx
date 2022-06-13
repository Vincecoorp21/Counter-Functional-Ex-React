import { useState } from 'react';

const Counter = props => {
  const [counter, setCounter] = useState(props.initialValue);

  const increase = () => {
    setCounter(counter + props.inc);
  };

  const decrease = () => {
    setCounter(counter - props.inc);
  };
  return (
    <div>
      <h1>Counter Function</h1>
      <p>{counter}</p>
      <br />
      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;

//<span onClick={increment}>{counter}</span>;
