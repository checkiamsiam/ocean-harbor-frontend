import { baseApi } from "@/redux/baseApi";

const upload_url = "/upload";

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bulkUpload: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: upload_url + "/bulk",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
    }),
  }),
});

export const { useBulkUploadMutation } = uploadApi;
