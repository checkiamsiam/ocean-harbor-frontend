import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { Brand } from "@/types/ApiResponse";

const brand_url = "/brand";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<{ brands: Brand[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: brand_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Brand[], meta: IMeta) => {
        return {
          brands: response,
          meta,
        };
      },
    }),

    getSingleBrand: builder.query<{ brand: Brand }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: brand_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Brand) => {
        return {
          brand: response,
        };
      },
    }),
  }),
});

export const getBrands = async ({ params }: { params?: IQuery }): Promise<{ brands: Brand[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: brand_url,
    method: "GET",
    params,
  });
  return {
    brands: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleBrand = async ({ id, params }: { id: string; params?: IQuery }): Promise<{ brand: Brand }> => {
  const result = await axiosInstance({
    url: brand_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    brand: result.data,
  };
};

export const { useGetBrandsQuery, useGetSingleBrandQuery } = brandApi;
