import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../app/store';

export interface OptionsState {
  theme: 'light' | 'dark';
}

const initialState: OptionsState = {
  theme: 'light',
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setTheme: (state: OptionsState, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    resetOptions: (state: OptionsState) => {
      state = initialState;
    }
  },
});

export default optionsSlice.reducer;
export const {
  setTheme,
} = optionsSlice.actions;

export const selectTheme = (state: RootState) => state.options.theme;

