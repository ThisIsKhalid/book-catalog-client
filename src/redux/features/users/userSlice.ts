import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  user: {
    name: string | null;
    email: string | null;
  };
}

const initialState: IUser = {
  user: {
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
