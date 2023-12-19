import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { AccountRequest } from "@/types/ApiResponse";

const account_request = "/account-request";

export type IAccReq = Omit<AccountRequest, "id">;

export const accountRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountRequests: builder.query<{ requests: AccountRequest[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: account_request,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: AccountRequest[], meta: IMeta) => {
        return {
          requests: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),

    getSingleAccountRequest: builder.query<{ request: AccountRequest }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: account_request + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: AccountRequest) => {
        return {
          request: response,
        };
      },
      providesTags: [tagTypes.user],
    }),
    accountRequest: builder.mutation({
      query: (arg: IAccReq) => ({
        url: account_request + "/create",
        method: "POST",
        data: arg,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    acceptAccountRequest: builder.mutation({
      query: (arg: { id: string; password: string }) => ({
        url: account_request + "/accept" + "/" + arg.id,
        method: "PATCH",
        data: { password: arg.password },
      }),
      invalidatesTags: [tagTypes.user],
    }),
    declineAccountRequest: builder.mutation({
      query: (arg: { id: string }) => ({
        url: account_request + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useAccountRequestMutation,
  useAcceptAccountRequestMutation,
  useDeclineAccountRequestMutation,
  useGetAccountRequestsQuery,
  useGetSingleAccountRequestQuery,
} = accountRequestApi;
