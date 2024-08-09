import React from 'react';
import { useSelector } from 'react-redux';

const Stats = () => {
  const { text, errors, startTime, isFinished } = useSelector((state) => state.typing);

  const calculateWPM = () => {
    if (!isFinished || !startTime) return 0;
    const timeDiff = (Date.now() - startTime) / 60000; // время в минутах
    const words = text.split('').length; // кол-во символов
    return Math.round(words / timeDiff);
  };

  return (
    <div className='stats'>
      <div>Ошибки ввода: {errors}</div>
      <div>Скорость печати: {calculateWPM()}</div>
    </div>
  );
};

export default Stats;
