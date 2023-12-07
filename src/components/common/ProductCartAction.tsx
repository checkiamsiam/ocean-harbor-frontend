"use client";
import { addToCart, getCart, removeFromCart, removeQntFromCart } from "@/service/cart/cart.service";
import { ICart } from "@/types";
import { Product } from "@/types/ApiResponse";
import { Button, ButtonProps } from "antd";
import { useEffect, useState } from "react";
import { RiAddFill, RiDeleteBin2Fill, RiSubtractFill } from "react-icons/ri";

const ProductCartAction = ({ product }: { product: Product }) => {
  const [render, setRender] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const handleRemoveQuantityFromCart: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    removeQntFromCart(product);
    setRender(!render);
  };
  const handleAddQuantityToCart: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    addToCart(product);
    setRender(!render);
  };
  const handleRemoveItem: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    removeFromCart(product);
    setRender(!render);
  };
  useEffect(() => {
    const cart: ICart = getCart();
    const isAlreadyInCart = cart.find((item) => item.product.id === product.id);
    if (isAlreadyInCart) {
      setQuantity(isAlreadyInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [product, render]);
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="flex">
          <Button
            onClick={handleRemoveQuantityFromCart}
            icon={<RiSubtractFill />}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 0,
              backgroundColor: "yellow",
            }}
          />
          <span
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#F0F0F0",
              padding: "3px 15px",
            }}
            className="flex items-center justify-center text-secondary "
          >
            {quantity}
          </span>
          <Button
            onClick={handleAddQuantityToCart}
            icon={<RiAddFill />}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 0,
              backgroundColor: "green",
            }}
          />
        </div>
        <div className="flex items-center">
          <RiDeleteBin2Fill onClick={handleRemoveItem} className="text-icon cursor-pointer text-red-500 hover:text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default ProductCartAction;
