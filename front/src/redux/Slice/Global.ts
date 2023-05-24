import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  uId: number;
  isLogin: boolean;
  accessToken: string;
}

const initialState: InitialState = {
  uId: 0,
  isLogin: false,
  accessToken: "",
};

const GlobalSlice = createSlice({
  name: "Global",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<InitialState>) {
      state = action.payload;
    },
    logout(state) {
      state = initialState;
      return state;
    },
  },
});

export default GlobalSlice;
