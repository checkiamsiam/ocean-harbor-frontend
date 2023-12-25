export interface AccountRequest {
  id: string;
  name: string;
  companyName: string;
  companyType: string;
  companyRegNo: string;
  companyDetails: string;
  taxNumber: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Admin {
  id: string;
  name: string;
  phone: string;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface Customer {
  id: string;
  name: string;
  companyName: string;
  companyType: string;
  companyRegNo: string;
  companyDetails: string;
  taxNumber: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  status: CustomerStatus;
  user?: User;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: Order[];
  notifications?: CustomerNotification[];
  _count?: { orders: number; notifications: number };
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  customerId?: string;
  customer?: Customer;
  adminId?: string;
  admin?: Admin;
  createdAt?: Date;
  updatedAt?: Date;
  _count?: { orders?: number; notifications?: number };
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  createdAt?: Date;
  updatedAt?: Date;
  subCategories?: SubCategory[];
  products?: Product[];
  brands?: CategoryBrand[];
  _count?: { subCategories: number; products: number; brands: number };
}

export interface SubCategory {
  id: string;
  title: string;
  icon ?: string;
  categoryId: string;
  category: Category;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
  _count?: { products: number };
}

export interface Brand {
  id: string;
  title: string;
  logo: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
  categories?: CategoryBrand[];
  _count?: { products: number; categories: number };
}

export interface CategoryBrand {
  categoryId: string;
  category: Category;
  brandId: string;
  brand: Brand;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  netWeight: string;
  packetPerBox: string;
  status: ProductStatus;
  type: ProductType;
  categoryId: string;
  category: Category;
  subCategoryId: string;
  subCategory: SubCategory;
  brandId: string;
  brand: Brand;
  createdAt?: Date;
  updatedAt?: Date;
  orders?: OrderItem[];
  _count?: { orders: number };
}

export interface Order {
  id: string;
  customerId: string;
  customer: Customer;
  status: OrderStatus;
  quotation?: string;
  invoice?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: OrderItem[];
  _count?: { products: number };
}

export interface OrderItem {
  productId: string;
  product: Product;
  orderId: string;
  order: Order;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type?: AdminNotificationType;
  refId?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CustomerNotification {
  id: string;
  customerId: string;
  customer: Customer;
  type?: CustomerNotificationType;
  refId?: string;
  title: string;
  message: string;
  url?: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum OrderStatus {
  requestQuotation = "requestQuotation",
  quotationApproved = "quotationApproved",
  spam = "spam",
  ordered = "ordered",
  declined = "declined",
  orderInProcess = "orderInProcess",
  delivered = "delivered",
}



export enum ProductStatus {
  active = "active",
  disabled = "disabled",
}

export enum ProductType {
  dry = "dry",
  frozen = "frozen",
}

export enum CustomerStatus {
  active = "active",
  disabled = "disabled",
}

export enum UserRole {
  admin = "admin",
  customer = "customer",
}

export enum AdminNotificationType {
  AccountRequest = "AccountRequest",
  quotationRequest = "quotationRequest",
  confirmOrder = "confirmOrder",
  declineOrder = "declineOrder",
}

export enum CustomerNotificationType {
  quotationApproved = "quotationApproved",
  quotationDeclined = "quotationDeclined",
  invoiceAdded = "invoiceAdded",
}

