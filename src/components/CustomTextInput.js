import React from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '../store/store';

const CustomTextInput = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setText(e.target.value));
  };

  return (
    <div>
      <textarea
        placeholder="Enter your custom text here"
        onChange={handleChange}
        rows="5"
        cols="50"
      />
    </div>
  );
};

export default CustomTextInput;
