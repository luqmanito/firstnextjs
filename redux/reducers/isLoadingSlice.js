import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "Loading",
  initialState: {
    isLoading: false
  },
  reducers: {
    setIsLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
