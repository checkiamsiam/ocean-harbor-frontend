import { axiosBaseQuery } from "@/redux/axiosBaseQuery";
import { tagTypesList } from "@/redux/tag-types";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
