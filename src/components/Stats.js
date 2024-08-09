import React from 'react';
import { useSelector } from 'react-redux';

const Stats = () => {
  const { userInput, text, errors, startTime, isFinished } = useSelector((state) => state.typing);

  const calculateWPM = () => {
    if (!isFinished || !startTime) return 0;
    const timeDiff = (Date.now() - startTime) / 60000;
    const words = text.split(' ').length;
    return Math.round(words / timeDiff);
  };

  return (
    <div>
      <div>Errors: {errors}</div>
      <div>WPM: {calculateWPM()}</div>
    </div>
  );
};

export default Stats;
