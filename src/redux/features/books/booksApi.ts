import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => `/books/?searchTerm=${params}`,
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    recentlyAdded: builder.query({
      query: () => "/books/?limit=3",
      providesTags: ["books"],
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useRecentlyAddedQuery } = bookApi;
