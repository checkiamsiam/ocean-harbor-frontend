import { OrderStatus } from "@/types/ApiResponse";

export const convertStatusText = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.requestQuotation:
      return "Quotation Request";
    case OrderStatus.quotationApproved:
      return "Quotation Approved";
    case OrderStatus.spam:
      return "Ignored";
    case OrderStatus.ordered:
      return "Pending";
    case OrderStatus.orderInProcess:
      return "In Process";
    case OrderStatus.delivered:
      return "Delivered";
    case OrderStatus.declined:
      return "Declined";
    default:
      return status;
  }
}