import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
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

export const { useGetProductsQuery } = productApi;
