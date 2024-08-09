import { configureStore, createSlice } from '@reduxjs/toolkit';

// Срез состояния для текстового ввода
const typingSlice = createSlice({
  name: 'typing',
  initialState: {
    text: 'Это образец текста для практики набора текста.',
    userInput: '',
    startTime: null,
    errors: 0,
    isFinished: false,
    customText: ''
  },
  reducers: {
    updateInput: (state, action) => {
      if (state.isFinished) return;

      const { input } = action.payload;
      state.userInput = input;

      // Подсчет ошибок
      let errors = 0;
      for (let i = 0; i < Math.min(state.text.length, input.length); i++) {
        if (state.text[i] !== input[i]) {
          errors++;
        }
      }

      state.errors = errors;
      
      // Проверка на окончание ввода
      if (input.length >= state.text.length) {
        state.isFinished = true;
      }
    },
    startTyping: (state) => {
      state.startTime = Date.now();
      state.isFinished = false;
      state.errors = 0;
      state.userInput = '';
    },
    setText: (state, action) => {
      state.text = action.payload;
      state.userInput = '';
      state.isFinished = false;
      state.errors = 0;
    }
  }
});

export const { updateInput, startTyping, setText } = typingSlice.actions;

const store = configureStore({
  reducer: {
    typing: typingSlice.reducer
  }
});

export default store;
