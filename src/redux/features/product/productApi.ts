import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { Product } from "@/types/ApiResponse";

const product_url = "/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: Product[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: product_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Product[], meta: IMeta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: builder.query<{ product: Product }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: product_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Product) => {
        return {
          product: response,
        };
      },
      providesTags: [tagTypes.product],
    }),
    addProduct: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: product_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.product],
    }),
    bulkAddProduct: builder.mutation({
      query: (arg: { data: Partial<Product>[] }) => ({
        url: product_url + "/bulk-create",
        method: "POST",
        data: arg.data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    updateProduct: builder.mutation({
      query: (arg: { id: string; data: FormData }) => ({
        url: product_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});

export const getProducts = async ({ params }: { params?: IQuery }): Promise<{ products: Product[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: product_url,
    method: "GET",
    params,
  });
  return {
    products: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleProduct = async ({ id, params }: { id: string; params?: IQuery }): Promise<{ product: Product }> => {
  const result = await axiosInstance({
    url: product_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    product: result.data,
  };
};

export const { useGetProductsQuery, useGetSingleProductQuery, useAddProductMutation, useUpdateProductMutation, useBulkAddProductMutation } =
  productApi;
