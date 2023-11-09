"use client";
import { Button, ButtonProps, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { RiAddFill, RiDeleteBin2Fill, RiSubtractFill } from "react-icons/ri";

const ProductCard = () => {
  const handleRemoveQuantityFromCart: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    console.log("clickedButton");
  };
  const handleAddQuantityToCart: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    console.log("clickedButton");
  };
  const handleRemoveItem: ButtonProps["onClick"] = (e) => {
    e.stopPropagation();
    console.log("clickedButton");
  };
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <Link href="/product/ga" className="flex flex-col gap-1">
          <Image alt="product-img" width={250} height={250} src="/img/product-dummy.png" className="w-full h-full" />
          <h1 className="text-sm underline text-center text-secondary">BD BEST EVER FOOD</h1>
          <p className="text-sm text-secondary text-center">1 x 6kg</p>
        </Link>
        <div className="flex justify-center items-center gap-5">
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
              0
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
          <div>
            <RiDeleteBin2Fill onClick={handleRemoveItem} className="text-icon cursor-pointer text-red-500 hover:text-red-400" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
