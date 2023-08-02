import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookCardProps } from "../../../types/common";

interface IWishlistState {
  books: BookCardProps[];
  currentlyReading: BookCardProps[];
  planToRead: BookCardProps[];
  finishedReading: BookCardProps[];
}

const initialState: IWishlistState = {
  books: [],
  currentlyReading: [],
  planToRead: [],
  finishedReading: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<BookCardProps>) => {
      if (!state.books.some((book) => book._id === action.payload._id)) {
        state.books.push(action.payload);
      }
    },

    addToCurrentlyReading: (state, action: PayloadAction<BookCardProps>) => {
      if (
        !state.currentlyReading.some((book) => book._id === action.payload._id)
      ) {
        state.currentlyReading.push(action.payload);
      }
    },

    addToFinishedReading: (state, action: PayloadAction<BookCardProps>) => {
      

      if (
        !state.finishedReading.some((book) => book._id === action.payload._id)
      ) {
        state.currentlyReading = state.currentlyReading.filter(
          (book) => book._id !== action.payload._id
        );
        
        state.finishedReading.push(action.payload);
      }
    },
  },
});

export const { addToWishlist, addToCurrentlyReading, addToFinishedReading } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
