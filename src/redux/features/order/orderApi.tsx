import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { AccountRequest, Order, OrderStatus } from "@/types/ApiResponse";

const order_url = "/order";

export type IAccReq = Omit<AccountRequest, "id">;

export const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query<{ orders: Order[]; meta: IMeta }, { params?: IQuery; status: OrderStatus[] }>({
      query: (arg) => ({
        url: order_url + "/get-my-orders" + "/" + arg.status.join(","),
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Order[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
      providesTags: [tagTypes.order]
    }),
    requestQuotation: builder.mutation({
      query: (arg: { productId: string; quantity: number }[]) => ({
        url: order_url + "/request-quotation",
        method: "POST",
        data: {
          items: arg,
        },
      }),
      invalidatesTags: [tagTypes.order],
    }),
    declineOrder: builder.mutation({
      query: (arg: { id : string; }) => ({
        url: order_url + "/decline-order" + "/" + arg.id,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.order],
    }),
    confirmOrder: builder.mutation({
      query: (arg: { id : string; }) => ({
        url: order_url + "/confirm-order" + "/" + arg.id,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});

export const { useRequestQuotationMutation, useGetMyOrdersQuery , useDeclineOrderMutation , useConfirmOrderMutation } = OrderApi;
