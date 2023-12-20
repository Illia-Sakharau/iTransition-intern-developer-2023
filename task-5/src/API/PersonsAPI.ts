import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Person, QueryParams } from "../types/persons";

export const PersonsAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-5-backend.onrender.com',
  }),
  keepUnusedDataFor: 0,
  endpoints: (build) => ({
    getPersons: build.query<Person[], QueryParams>({
      query: (parsms) => ({
        url: '/persons',
        params: parsms
      }),
    }),
  })
})

export const {useGetPersonsQuery} = PersonsAPI;

