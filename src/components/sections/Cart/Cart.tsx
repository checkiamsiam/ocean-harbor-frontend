"use client";
import CartCard from "@/components/sectionComponents/Cart/CartCard";
import GAButton from "@/components/ui/GAButton";

const Cart = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="py-10">
          <div className="flex flex-col gap-5">
            <CartCard />
            <CartCard />
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
