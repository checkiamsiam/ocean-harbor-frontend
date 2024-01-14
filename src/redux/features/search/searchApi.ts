import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { Brand, Category, Product } from "@/types/ApiResponse";

export interface SearchResult {
  products: Product[];
  categories: Category[];
  brands: Brand[];
  meta: IMeta;
}

const search_url = "/search";

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchResult, { params?: IQuery }>({
      query: (arg) => ({
        url: search_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Omit<SearchResult, "meta">, meta: IMeta) => {
        return {
          ...response,
          meta,
        };
      },
    }),
  }),
});

export const getSearch = async ({  params }: {  params?: IQuery }): Promise<SearchResult> => {
  const result = await axiosInstance({
    url: search_url ,
    method: "GET",
    params,
  });
  return {
    ...result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const { useSearchQuery } = searchApi;
