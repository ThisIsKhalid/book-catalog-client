import { api } from "../api/apiSlice";


const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


export const {useUserSignUpMutation, useUserLoginMutation} = authApi;