import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { Category } from "@/types/ApiResponse";

const category_url = "/category";

export const categoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: category_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Category[], meta: IMeta) => {
        return {
          categories: response,
          meta,
        };
      },
    }),
    getSingleCategory: builder.query<{ category: Category }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: category_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Category) => {
        return {
          category: response,
        };
      },
    }),
  }),
});

export const getCategory = async ({ params }: { params?: IQuery }): Promise<{ categories: Category[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: category_url,
    method: "GET",
    params,
  });
  return {
    categories: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleCategory = async ({
  id,
  params,
}: {
  id: string;
  params?: IQuery;
}): Promise<{ category: Category }> => {
  const result = await axiosInstance({
    url: category_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    category: result.data,
  };
};



export const { useGetCategoriesQuery, useGetSingleCategoryQuery } = categoryAPI;
