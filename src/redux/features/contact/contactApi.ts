import { baseApi } from "@/redux/baseApi";
import { IContactMail } from "@/types";

const contact_url = "/contact";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactMail: builder.mutation({
      query: (arg: { data: IContactMail }) => ({
        url: contact_url + "/mail",
        method: "POST",
        data: arg.data,
      }),
    }),
  }),
});

export const { useContactMailMutation } = contactApi;
