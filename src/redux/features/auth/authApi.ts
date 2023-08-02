import { api } from "../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    userLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    getUserDetails: builder.query({
      query: (accessToken) => ({
        url: "/users/get-user",
        headers: {
          Authorization: `${accessToken}`,
        },
      }),
      providesTags: ["users", "books"],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLoginMutation,
  useGetUserDetailsQuery,
} = authApi;
