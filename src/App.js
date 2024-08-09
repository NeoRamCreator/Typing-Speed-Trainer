import React, { useState, useEffect } from 'react';
import TypingText from './components/TypingText';
import TypingInput from './components/TypingInput';
import Stats from './components/Stats';
import CustomTextInput from './components/CustomTextInput';
import { useDispatch } from 'react-redux';
import { startTyping } from './store/store';

const App = () => {
  const dispatch = useDispatch();
  const [isCustomTextInputVisible, setIsCustomTextInputVisible] = useState(false);

  useEffect(() => {
    dispatch(startTyping());
  }, [dispatch]);

  const handleToggleTextInput = () => {
    setIsCustomTextInputVisible((prev) => !prev);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Typing Speed Trainer</h1>

      <button onClick={handleToggleTextInput} className='new-text-btn'>
        {isCustomTextInputVisible ? 'ОК' : 'Изменить текст'}
      </button>

      {isCustomTextInputVisible && <CustomTextInput />}
      {!isCustomTextInputVisible &&
        <>
          <TypingText />
          <TypingInput />
          <Stats />
        </>
      }
    </div>
  );
};

export default App;
