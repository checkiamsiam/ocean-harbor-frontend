import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { Brand } from "@/types/ApiResponse";

const brand_url = "/brand";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<{ brands: Brand[]; meta: IMeta }, IQuery>({
      query: (params) => ({
        url: brand_url,
        method: "GET",
        params,
      }),
      transformResponse: (response: Brand[], meta: IMeta) => {
        return {
          brands: response,
          meta,
        };
      },
    }),
  }),
});

export const { useGetBrandsQuery } = brandApi;
