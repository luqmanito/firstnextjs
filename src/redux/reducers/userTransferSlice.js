import { createSlice } from "@reduxjs/toolkit";

// const

const userTransferSlice = createSlice({
  name: "Users",
  initialState: {
    details: []
  },
  reducers: {
    setDetails: (state, action) => {
      return {
        ...state,
        details: action.payload,
      };
    },
  },
});

export const { setDetails } = userTransferSlice.actions;
export default userTransferSlice.reducer;
