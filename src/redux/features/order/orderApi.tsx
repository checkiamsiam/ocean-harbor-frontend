import { baseApi } from "@/redux/baseApi";
import { AccountRequest } from "@/types/ApiResponse";

const order_url = "/order";

export type IAccReq = Omit<AccountRequest, "id">;

export const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useRequestQuotationMutation } = OrderApi;
