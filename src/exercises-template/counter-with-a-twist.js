import React, { useState, createContext, useContext } from 'react';

const CounterContext = createContext();

export default function CounterParentComponent() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      <ChildComponent />
      <h1 onClick={decrementCounter}>{counter}</h1>
    </CounterContext.Provider>
  );
}

function ChildComponent() {
  const counterContext = useContext(CounterContext);
  const { incrementCounter } = counterContext;

  return <button onClick={incrementCounter}>Click me!</button>;
}
