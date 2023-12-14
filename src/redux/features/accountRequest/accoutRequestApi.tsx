import { baseApi } from "@/redux/baseApi";
import { AccountRequest } from "@/types/ApiResponse";

const account_request = "/account-request";

export type IAccReq = Omit<AccountRequest, "id">;

export const accountRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    accountRequest: builder.mutation({
      query: (arg: IAccReq) => ({
        url: account_request + "/create",
        method: "POST",
        data: arg,
      }),
    }),
  }),
});


export const { useAccountRequestMutation } = accountRequestApi;
