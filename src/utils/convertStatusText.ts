import { OrderStatus } from "@/types/ApiResponse";

export const convertStatusText = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.requestQuotation:
      return "Quotation Request";
    case OrderStatus.quotationApproved:
      return "Quotation Approved";
    case OrderStatus.spam:
      return "Spam";
    case OrderStatus.ordered:
      return "Ordered";
    case OrderStatus.orderInProcess:
      return "Order In Process";
    case OrderStatus.delivered:
      return "Delivered";
    case OrderStatus.declined:
      return "Order Declined";
    default:
      return "Spam";
  }
}