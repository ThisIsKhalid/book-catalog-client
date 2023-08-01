import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookCardProps } from "../../../types/common";

interface IWishList {
  books: BookCardProps[];
}

const initialState: IWishList = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<BookCardProps>) => {
      const existing = state.books.find(
        (book) => book._id === action.payload._id
      );

      if (existing) {
        //* => ! is meaning that this things never gone undefined
        existing.quantity = existing.quantity! + 1;
      } else {
        state.books.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
