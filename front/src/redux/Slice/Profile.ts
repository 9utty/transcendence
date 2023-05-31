import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  uId: number;
  isMe: boolean;
}

const initialState: InitialState = {
  uId: 0,
  isMe: false,
};

const ProfileSlice = createSlice({
  name: "Profile",
  initialState: initialState,
  reducers: {
    addId(state, action: PayloadAction<InitialState>) {
      state = action.payload;
    },
    deleteId(state) {
      state = initialState;
    },
  },
});

export default ProfileSlice;
