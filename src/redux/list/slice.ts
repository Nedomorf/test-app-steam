import { createSlice } from '@reduxjs/toolkit';
import { IListIem } from '../../interfaces/listItem.interface';

export interface IListSlice {
  list: IListIem[];
}

const initialState: IListSlice = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state) => {
      const newItem: IListIem = {
        id: Math.random().toString(36).substring(2, 9),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };
      state.list.unshift(newItem);
    },
    removeItem: (state) => {
      state.list.pop();
    },
  },
});

export const { actions: listActions, reducer: listReducer } = listSlice;
