import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { AccountRequest, Order, OrderStatus } from "@/types/ApiResponse";

const order_url = "/order";

export type IAccReq = Omit<AccountRequest, "id">;

export const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query<{ orders: Order[]; meta: IMeta }, { params?: IQuery; status: OrderStatus }>({
      query: (arg) => ({
        url: order_url + "/get-my-orders" + "/" + arg.status,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Order[], meta: IMeta) => {
        return {
          orders: response,
          meta,
        };
      },
    }),
    requestQuotation: builder.mutation({
      query: (arg: { productId: string; quantity: number }[]) => ({
        url: order_url + "/request-quotation",
        method: "POST",
        data: {
          items: arg,
        },
      }),
    }),
  }),
});

export const { useRequestQuotationMutation , useGetMyOrdersQuery } = OrderApi;
