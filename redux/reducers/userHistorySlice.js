import { createSlice } from "@reduxjs/toolkit";

// const

const userHistorySlice = createSlice({
  name: "Users History",
  initialState: {
    history: []
  },
  reducers: {
    setHistory: (state, action) => {
      return {
        ...state,
        history: action.payload,
      };
    },
  },
});

export const { setHistory } = userHistorySlice.actions;
export default userHistorySlice.reducer;
