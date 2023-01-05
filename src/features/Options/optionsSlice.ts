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
  screen: 'Mobile' | 'Tablet' | 'Desktop' | null;
}

const initialState: OptionsState = {
  theme: 'light',
  screen: null,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setTheme: (state: OptionsState, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setScreen: (
      state: OptionsState,
      action: PayloadAction<number>,
    ) => {
      if(action.payload > 1024) {
        state.screen = 'Desktop';
      } else if (action.payload > 767) {
        state.screen = 'Tablet';
      } else {
        state.screen = 'Mobile';
      }
    },

    resetOptions: (state: OptionsState) => {
      state = initialState;
    }
  },
});

export default optionsSlice.reducer;
export const {
  setTheme,
  setScreen,
  resetOptions,
} = optionsSlice.actions;

export const selectTheme = (state: RootState) => state.options.theme;
export const selectDevice = (state: RootState) => state.options.screen;

