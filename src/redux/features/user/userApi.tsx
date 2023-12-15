import { baseApi } from "@/redux/baseApi";
import { Customer } from "@/types/ApiResponse";

const account_profile = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: account_profile + "/profile",
        method: "GET",
      }),
      transformResponse: (response: Customer): { customer: Customer } => {
        return {
          customer: response,
        };
      },
    }),
  }),
});

export const { useProfileQuery } = userApi;
