import { baseApi } from "@/redux/baseApi";
import { User } from "@/types/ApiResponse";

const account_profile = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => ({
        url: account_profile + "/profile",
        method: "GET",
      }),
      transformResponse: (response: User): { user: User } => {
        return {
          user: response,
        };
      },
    }),
  }),
});

export const { useProfileQuery } = userApi;
