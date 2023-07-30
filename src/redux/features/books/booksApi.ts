import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params) => {
        const { searchTerm, genre } = params;
        let queryString = "/books";

        if (searchTerm) {
          queryString += `/?searchTerm=${encodeURIComponent(searchTerm)}`;
        }

        if (genre) {
          queryString += `${searchTerm ? "&" : "/?"}genre=${encodeURIComponent(
            genre
          )}`;
        }

        return queryString;
      },
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

export const { useGetBooksQuery, useRecentlyAddedQuery, usePostBookMutation } = bookApi;
