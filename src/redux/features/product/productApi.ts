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
  }),
});

export const { useGetProductsQuery } = productApi;
