import { createSlice } from "@reduxjs/toolkit";

const confirmSlice = createSlice({
  name: "Confirmation",
  initialState: {
    confirm: []
  },
  reducers: {
    setConfirm: (state, action) => {
      return {
        ...state,
        confirm: action.payload,
      };
    },
  },
});

export const { setConfirm } = confirmSlice.actions;
export default confirmSlice.reducer;
