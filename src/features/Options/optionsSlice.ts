import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import {
  RootState,
} from '../../app/store';
import { Post } from '../../type/Post';

export interface OptionsState {
  theme: 'light' | 'dark';

  storage: Post[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: unknown;
}

const initialState: OptionsState = {
  theme: 'light',

  storage: [],
  statusLoading: 'idle',
  error: null,
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

