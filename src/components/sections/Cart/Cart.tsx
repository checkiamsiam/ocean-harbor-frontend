"use client";
import CartCard from "@/components/sectionComponents/Cart/CartCard";
import GAButton from "@/components/ui/GAButton";
import { getCart } from "@/service/cart/cart.service";
import { ICart } from "@/types";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState<ICart>([] as ICart);
  useEffect(() => {
    setCart(getCart());
  }, []);
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <div className="flex flex-col gap-5">
            {cart.map((item) => (
              <CartCard key={item.product.id} product={item.product} />
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <GAButton arrow>Request price quotation</GAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
