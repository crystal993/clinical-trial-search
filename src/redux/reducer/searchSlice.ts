import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SerachState {
  sickData: [];
  searchWord: string;
  isLoading: boolean;
  isAutocomplete: boolean;
}

export interface sickData {
  sickCd: string;
  sickNm: string;
}

// Define the initial state using that type
const initialState: SerachState = {
  sickData: [],
  searchWord: '',
  isLoading: true,
  isAutocomplete: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSickData: (state, action) => {
      state.sickData = action.payload;
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAutocomplete: (state, action) => {
      state.isAutocomplete = action.payload;
    },
  },
});

export const { setSearchWord, setIsLoading, setIsAutocomplete, setSickData } = searchSlice.actions;
export default searchSlice.reducer;
