import React, { useState, useEffect, useRef } from 'react';
import TypingText from './components/TypingText';
import TypingInput from './components/TypingInput';
import CustomTextInput from './components/CustomTextInput';
import { useDispatch } from 'react-redux';
import { startTyping } from './store/store';

const App = () => {
  const dispatch = useDispatch();
  const [isCustomTextInputVisible, setIsCustomTextInputVisible] = useState(false);
  // const inputRef = useRef(null)

  useEffect(() => {
    dispatch(startTyping());
  }, [dispatch]);

  const handleToggleTextInput = () => {
    setIsCustomTextInputVisible((prev) => !prev);
  };

  const handleRestart = () => {
    dispatch(startTyping());

  };

  return (
    <div style={{}} className='app'>
      <h1>Typing Speed Trainer</h1>

      <div className='actions'>
        <button onClick={handleToggleTextInput} className='new-text-btn'>
          {isCustomTextInputVisible ? 'ОК' : 'Изменить текст'}
        </button>

        {!isCustomTextInputVisible && <button onClick={handleRestart}>Начать сначала </button>}

      </div>
      {isCustomTextInputVisible && <CustomTextInput />}
      {!isCustomTextInputVisible &&
        <div className='content'>
          <TypingText />
          <TypingInput />
          {/* <Stats /> */}
        </div>
      }
    </div>
  );
};

export default App;
