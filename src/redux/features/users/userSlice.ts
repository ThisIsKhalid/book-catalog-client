import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
  user: {
    _id: string | null;
    name: string | null;
    email: string | null;
  };
  isLoading: boolean;
}

const initialState: IUser = {
  user: {
    _id: null,
    name: null,
    email: null,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
