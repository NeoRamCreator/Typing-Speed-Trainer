import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, startTyping } from '../store/store';

const TypingInput = () => {
    const dispatch = useDispatch();
    const { userInput, isFinished } = useSelector((state) => state.typing);

    const handleChange = (e) => {
        dispatch(updateInput({ input: e.target.value }));
    };

    const handleRestart = () => {
        dispatch(startTyping());
    };

    return (
        <div>
            {!isFinished && (

                <input
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                    disabled={isFinished}
                    autoFocus
                />
            )}

            <button onClick={handleRestart}>Restart</button>
        </div>
    );
};

export default TypingInput;
