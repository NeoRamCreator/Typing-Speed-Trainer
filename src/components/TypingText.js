import React from 'react';
import { useSelector } from 'react-redux';

const TypingText = () => {
  const { text, userInput } = useSelector((state) => state.typing);

  const highlightedText = [...text].map((char, index) => {
    const userChar = userInput[index];
    return (
      <span
        key={index}
        style={{
          color: userChar === char ? '#33e43f' : userChar === undefined ? '#7e7e7e' : '#FF3549FF',
        }}
      >
        {char}
      </span>
    );
  });

  return <div>{highlightedText}</div>;
};

export default TypingText;
