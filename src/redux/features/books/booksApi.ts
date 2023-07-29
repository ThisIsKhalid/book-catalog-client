import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    recentlyAdded: builder.query({
      query: () => "/books/?limit=3",
    }),
  }),
});

export const { useGetBooksQuery, useRecentlyAddedQuery } = bookApi;
