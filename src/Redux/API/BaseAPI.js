import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// ex:
const SERVER_URL = process.env.REACT_APP_SERVER_URL + ":" + process.env.REACT_APP_SERVER_PORT;

// Define the tag types you want to use (user and device)
const tagTypes = ['User', 'Device'];

// Initialize an empty api service that we'll inject endpoints into later as needed
export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL + '/api' }),
  tagTypes: tagTypes,
  endpoints: () => ({}),
});