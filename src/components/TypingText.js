import React from 'react';
import { useSelector } from 'react-redux';
import Stats from './Stats';

const TypingText = () => {
  const { text, userInput, isFinished } = useSelector((state) => state.typing);

  const highlightedText = [...text].map((char, index) => {
    const userChar = userInput[index];
    return (
      <span
        className={userInput.length === index ? 't1' : ''}
        key={index}
        style={{
          color: userChar === char ? '#33e43f' : userChar === undefined ? '#7e7e7e' : '#FF3549FF',
          background: userChar === char ? '' : userChar === undefined ? '' :
            char === ' ' ? '#FF3549FF' : ''
        }}
      >
        {char}
      </span>
    );
  });

  return <div className='typing-text'>
    {highlightedText}
    {isFinished && <Stats />}
  </div>;
};

export default TypingText;
