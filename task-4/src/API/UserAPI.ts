import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StatusReqBody, UserInfo } from "../types/users";

export const UserAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task4backend.onrender.com/users',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token')
        headers.set('Authorization', `Bearer ${token}`)
        return headers
    }
  }),
  endpoints: (build) => ({
    getUsers: build.query<UserInfo[], void>({
      query: () => ({
        url: '/all',
      }),
    }),
    setUsersStatus: build.mutation<UserInfo[], StatusReqBody>({
      query: (body) => ({
        url: '/status',
        method: 'POST',
        body,
      })
    }),
  })
})

export const {useGetUsersQuery, useSetUsersStatusMutation} = UserAPI;

