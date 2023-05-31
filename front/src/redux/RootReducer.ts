import { combineReducers } from "redux";
import GlobalSlice from "./Slice/Global";
import UserSlice from "./Slice/User";
import { ChatSlice } from "./Slice/Chat";
import ProfileSlice from "./Slice/Profile";

export const rootReducer = combineReducers({
  global: GlobalSlice.reducer,
  user: UserSlice.reducer,
  chat: ChatSlice.reducer,
  profile: ProfileSlice.reducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;
