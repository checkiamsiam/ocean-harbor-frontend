import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
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
      providesTags: [tagTypes.brand],
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
      providesTags: [tagTypes.brand],
    }),
    addBrand: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: brand_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.brand],
    }),
    updateBrand: builder.mutation({
      query: (arg: { id: string; data: Partial<Brand> }) => ({
        url: brand_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.brand],
    }),
    deleteBrand: builder.mutation({
      query: (arg: { id: string }) => ({
        url: brand_url + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.brand],
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

export const { useGetBrandsQuery, useGetSingleBrandQuery, useUpdateBrandMutation, useAddBrandMutation, useDeleteBrandMutation } = brandApi;
