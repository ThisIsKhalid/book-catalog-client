import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  user: {
    _id: string | null;
    name: string | null;
    email: string | null;
  };
}

const initialState: IUser = {
  user: {
    _id: null,
    name: null,
    email: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers: {
    setUser : (state, action) => {
        state.user = action.payload
    }
  }
});

export const { setUser} = userSlice.actions

export default userSlice.reducer
