import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
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
      providesTags: [tagTypes.category],
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
      providesTags: [tagTypes.category],
    }),
    addCategory: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: category_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    updateCategory: builder.mutation({
      query: (arg: { id: string; data: Partial<Category> }) => ({
        url: category_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    deleteCategory: builder.mutation({
      query: (arg: { id: string }) => ({
        url: category_url + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
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

export const getSingleCategory = async ({ id, params }: { id: string; params?: IQuery }): Promise<{ category: Category }> => {
  const result = await axiosInstance({
    url: category_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    category: result.data,
  };
};

export const { useGetCategoriesQuery, useGetSingleCategoryQuery, useAddCategoryMutation, useUpdateCategoryMutation , useDeleteCategoryMutation } = categoryAPI;
