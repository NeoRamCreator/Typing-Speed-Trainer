import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, startTyping } from '../store/store';

const TypingInput = () => {
    const dispatch = useDispatch();
    const { userInput, isFinished } = useSelector((state) => state.typing);

    const handleChange = (e) => {
        dispatch(updateInput({ input: e.target.value }));
    };

 

    return (
        <div className='typing-input'>
            {!isFinished && (

                <textarea
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    disabled={isFinished}
                    autoFocus
                />
            )}

          
        </div>
    );
};

export default TypingInput;
