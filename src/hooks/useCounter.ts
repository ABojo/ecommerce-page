import { useState } from "react";

export default function useCounter(maxNumber: number, initialValue?: number) {
  const [counter, setCounter] = useState(initialValue ? initialValue : 0);

  function decrementCounter() {
    setCounter((prevIndex) => {
      const newIndex = prevIndex - 1;

      return newIndex > -1 ? newIndex : maxNumber;
    });
  }
  function incrementCounter() {
    setCounter((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex <= maxNumber ? newIndex : 0;
    });
  }

  return { counter, setCounter, decrementCounter, incrementCounter };
}
