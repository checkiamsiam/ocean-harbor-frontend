"use client";
import { Button, ButtonProps } from "antd";
import { RiAddFill, RiDeleteBin2Fill, RiSubtractFill } from "react-icons/ri";

const ProductCartAction = () => {
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
        <div className="flex items-center">
          <RiDeleteBin2Fill onClick={handleRemoveItem} className="text-icon cursor-pointer text-red-500 hover:text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default ProductCartAction;
