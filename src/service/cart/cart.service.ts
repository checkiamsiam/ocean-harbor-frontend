import { cart_key } from "@/constants/localstorageKeys";
import { ICart } from "@/types";
import { Product } from "@/types/ApiResponse";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/utils/browserStorage/localstorage";

export const getCart = (): ICart => {
  const cart: ICart = JSON.parse(getFromLocalStorage(cart_key) || "[]");
  return cart;
};

export const addToCart = (product: Product): void => {
  const cart: ICart = getCart();
  const isAlreadyInCart = cart.find((item) => item.product.id === product.id);
  if (isAlreadyInCart) {
    isAlreadyInCart.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  setToLocalStorage(cart_key, JSON.stringify(cart));
};

export const removeFromCart = (product: Product): void => {
  const cart: ICart = getCart();
  const isAlreadyInCart = cart.find((item) => item.product.id === product.id);
  if (isAlreadyInCart) {
    cart.splice(cart.indexOf(isAlreadyInCart), 1);
  } else {
    return;
  }
  setToLocalStorage(cart_key, JSON.stringify(cart));
};

export const removeQntFromCart = (product: Product): void => {
  const cart: ICart = getCart();
  const isAlreadyInCart = cart.find((item) => item.product.id === product.id);
  if (isAlreadyInCart?.quantity && isAlreadyInCart.quantity > 1) {
    isAlreadyInCart.quantity -= 1;
  } else if (isAlreadyInCart?.quantity && isAlreadyInCart.quantity === 1) {
    cart.splice(cart.indexOf(isAlreadyInCart), 1);
  } else {
    return;
  }
  setToLocalStorage(cart_key, JSON.stringify(cart));
};

export const clearCart = (): void => {
  removeFromLocalStorage(cart_key);
};
