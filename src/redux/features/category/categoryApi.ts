import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { Category } from "@/types/ApiResponse";

const category_url = "/category";

export const categoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[]; meta: IMeta }, IQuery>({
      query: (params) => ({
        url: category_url,
        method: "GET",
        params,
      }),
      transformResponse: (response: Category[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryAPI;
