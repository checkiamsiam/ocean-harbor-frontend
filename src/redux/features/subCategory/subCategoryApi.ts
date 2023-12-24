import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { SubCategory } from "@/types/ApiResponse";

const subSubCategory_url = "/sub-category";

export const subSubCategoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query<{ subCategories: SubCategory[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: subSubCategory_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: SubCategory[], meta: IMeta) => {
        return {
          subCategories: response,
          meta,
        };
      },
    }),
    getSingleSubSubCategory: builder.query<{ subSubCategory: SubCategory }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: subSubCategory_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: SubCategory) => {
        return {
          subSubCategory: response,
        };
      },
    }),
  }),
});

export const { useGetSingleSubSubCategoryQuery, useGetSubCategoriesQuery } = subSubCategoryAPI;
