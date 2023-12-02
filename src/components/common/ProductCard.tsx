"use client";
import { Link } from "@/lib/router-events";
import { Card } from "antd";
import Image from "next/image";
import ProductCartAction from "./ProductCartAction";

const ProductCard = () => {
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <Link href="/product/ga" className="flex flex-col gap-1">
          <Image alt="product-img" width={250} height={250} src="/img/product-dummy.png" className="w-full h-full" />
          <h1 className="text-sm underline text-center text-secondary">BD BEST EVER FOOD</h1>
          <p className="text-sm text-secondary text-center">1 x 6kg</p>
        </Link>
        <div className="flex justify-center">
          <ProductCartAction />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
