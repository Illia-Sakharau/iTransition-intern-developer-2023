import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthRespData, LoginReqBody, RegistrationReqBody } from "../types/users";

export const AuthAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task4backend.onrender.com/auth',
  }),
  endpoints: (build) => ({
    createUser: build.mutation<AuthRespData, RegistrationReqBody>({
      query: (body) => ({
        url: '/registration',
        method: 'POST',
        body,
      })
    }),
    loginUser: build.mutation<AuthRespData, LoginReqBody>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      })
    }),
  })
})

export const {useLoginUserMutation, useCreateUserMutation} = AuthAPI;
