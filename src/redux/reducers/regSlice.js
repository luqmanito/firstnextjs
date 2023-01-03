import { createSlice } from "@reduxjs/toolkit";


const regSlice = createSlice({
  name: "register",
  initialState: {
    user_id: null,
    pin: null,
    token: null,
  },
  reducers: {
    setUser_id: (state, action) => {
      return {
        ...state,
        user_id: action.payload,
      };
    },
    setPin: (state, action) => {
      return {
        ...state,
        pin: action.payload,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setUser_id, setPin, setToken } = regSlice.actions;
export default regSlice.reducer;
