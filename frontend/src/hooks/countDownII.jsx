import { useState } from 'react';

const formatSecond = 1000;

const CountDown = (time) => {
  const [second, setSecond] = useState(time);

  const down = () => {
    if (second === 0) return;
    setSecond(second - 1);
  };
  setTimeout(() => down(), formatSecond);
  return [second];
};

export default CountDown;
