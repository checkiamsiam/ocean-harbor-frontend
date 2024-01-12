import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { SubCategory } from "@/types/ApiResponse";

const subCategory_url = "/sub-category";

export const subSubCategoryAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubCategories: builder.query<{ subCategories: SubCategory[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: subCategory_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: SubCategory[], meta: IMeta) => {
        return {
          subCategories: response,
          meta,
        };
      },
      providesTags: [tagTypes.subCategory],
    }),
    getSingleSubCategory: builder.query<{ subCategory: SubCategory }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: subCategory_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: SubCategory) => {
        return {
          subCategory: response,
        };
      },
      providesTags: [tagTypes.subCategory],
    }),
    addSubCategory: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: subCategory_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
    updateSubCategory: builder.mutation({
      query: (arg: { id: string; data: Partial<SubCategory> }) => ({
        url: subCategory_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
    deleteSubCategory: builder.mutation({
      query: (arg: { id: string }) => ({
        url: subCategory_url + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.subCategory],
    }),
  }),
});

export const getSubCategory = async ({ params }: { params?: IQuery }): Promise<{ subCategory: SubCategory[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: subCategory_url,
    method: "GET",
    params,
  });
  return {
    subCategory: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const { useGetSingleSubCategoryQuery, useGetSubCategoriesQuery, useAddSubCategoryMutation, useUpdateSubCategoryMutation , useDeleteSubCategoryMutation } = subSubCategoryAPI;
