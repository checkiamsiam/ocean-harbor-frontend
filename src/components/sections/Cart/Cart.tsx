"use client";
import CartCard from "@/components/sectionComponents/Cart/CartCard";
import GAButton from "@/components/ui/GAButton";
import { useRouter } from "@/lib/router-events";
import { useRequestQuotationMutation } from "@/redux/features/order/orderApi";
import { clearCart, getCart } from "@/service/cart/cart.service";
import { ICart } from "@/types";
import { Empty, message } from "antd";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [cart, setCart] = useState<ICart>([] as ICart);
  const [requestQuotation] = useRequestQuotationMutation();
  useEffect(() => {
    setCart(getCart());
  }, []);
  const handleRequestPriceQuotation = async () => {
    if (!session && status === "unauthenticated") {
      message.warning("You need to login first");
      router.push("/login");
      return;
    }
    const items = cart.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
    }));

    try {
      message.loading("Requesting.....");
      const res = await requestQuotation(items).unwrap();
      if (!!res) {
        message.destroy();
        message.success("Quotation Request sent for following items");
        clearCart();
        setCart(getCart());
        router.push("/dashboard/quotation-requests");
      }
    } catch (error) {
      message.destroy();
      message.warning("Request failed! try again");
    }
  };
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          {cart && cart.length > 0 ? (
            <>
              <div className="flex flex-col gap-5">
                {cart.map((item) => (
                  <CartCard key={item.product.id} product={item.product} />
                ))}
              </div>
              <div className="mt-5 flex justify-center">
                <GAButton onClick={handleRequestPriceQuotation} arrow>
                  Request price quotation
                </GAButton>
              </div>
            </>
          ) : (
            <Empty description="Cart is Empty" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
