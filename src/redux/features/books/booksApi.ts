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
      providesTags: ["books", "reviews"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["reviews"],
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

    patchBook: builder.mutation({
      query: ({ id, data, accessToken }) => ({
        url: `/books/edit-book/${id}`,
        headers: {
          Authorization: `${accessToken}`,
        },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `/books/delete-book/${id}`,
        headers: {
          Authorization: `${accessToken}`,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    postReview: builder.mutation({
      query: ({ id, reviewData }) => ({
        url: `/books/${id}/add-review`,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useRecentlyAddedQuery,
  usePostBookMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
  usePatchBookMutation,
  useDeleteBookMutation
} = bookApi;
