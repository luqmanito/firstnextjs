import { combineReducers } from "redux";
import regSlice from "./regSlice";
import userTransferSlice from "./userTransferSlice";
import confirmSlice from "./confirmSlice";
import userHistorySlice from "./userHistorySlice";
import isLoadingSlice from "./isLoadingSlice";

const reducer = combineReducers({
  regSlice: regSlice,
  userTransferSlice: userTransferSlice,
  confirmSlice: confirmSlice,
  userHistorySlice: userHistorySlice,
  isLoadingSlice: isLoadingSlice,
});

export default reducer