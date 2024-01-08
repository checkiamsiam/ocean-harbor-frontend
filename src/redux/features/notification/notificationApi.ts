import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { AdminNotification, CustomerNotification } from "@/types/ApiResponse";

const notification_url = "/notification";

type Notification = AdminNotification | CustomerNotification;

export const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query<{ notifications: Notification[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: notification_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: Notification[], meta: IMeta) => {
        return {
          notifications: response,
          meta,
        };
      },
      providesTags: [tagTypes.notification],
    }),
    getUnreadNotification: builder.query<{ count: number }, {}>({
      query: () => ({
        url: notification_url + "/unread-count",
        method: "GET",
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          count: response?.count,
        };
      },
      providesTags: [tagTypes.notification],
    }),
    markAsRead: builder.mutation({
      query: (arg: { id: string }) => ({
        url: notification_url + "/read" + "/" + arg.id,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
    markAllAsRead: builder.mutation({
      query: () => ({
        url: notification_url + "/mark-all-as-read",
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const { useGetNotificationQuery, useGetUnreadNotificationQuery, useMarkAsReadMutation, useMarkAllAsReadMutation } = notificationApi;
