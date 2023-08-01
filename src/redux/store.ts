import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import userReducer from "./features/users/userSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    wishlist: wishlistReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
