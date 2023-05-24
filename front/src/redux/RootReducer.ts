import { combineReducers } from "redux";
import GlobalSlice from "./Slice/Global";
import UserSlice from "./Slice/User";

export const rootReducer = combineReducers({
  global: GlobalSlice.reducer,
  user: UserSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;
