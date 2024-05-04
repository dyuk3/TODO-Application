import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // adding a new TODO list item
    addItem: (state, action) => {
      const { name, id } = action.payload;
      const newItem = {
        name: name,
        id: id,
        completed: false,
      };
      console.log(newItem);
      name.length >= 3 && state.push(newItem);

      localStorage.setItem('TodoItems', JSON.stringify(state));
    },
    //reducer to delete the todoList item
    removeItem: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('TodoItems', JSON.stringify(newState));
      return (state = newState);
    },
    // get data from localstorage
    populateData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addItem, removeItem, populateData } = todoSlice.actions;

export default todoSlice.reducer;
