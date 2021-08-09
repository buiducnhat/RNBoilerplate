import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../configs/redux/store';

export interface IUIState {
  themeType: 'light' | 'dark';
}

const initialState: IUIState = {
  themeType: 'light'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,

  reducers: {
    toggleThemeType(state) {
      state.themeType = state.themeType === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleThemeType } = uiSlice.actions;

export const selectThemeType = (state: RootState) => state.ui.themeType;

export default uiSlice.reducer;
