import { Link } from "@/lib/router-events";
import { Product } from "@/types/ApiResponse";
import { Card } from "antd";
import Image from "next/image";
import ProductCartAction from "./ProductCartAction";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <div className="flex flex-col gap-1">
        <Link href={`/product/${product?.id}`} className="flex flex-col gap-1">
          <Image alt="product-img" width={250} height={250} src={product?.image} className="w-full " />
          <h1 className="text-sm underline text-center text-secondary">{product?.title}</h1>
          <p className="text-sm text-secondary text-center">
            {product?.packetPerBox} x {product?.netWeight}
          </p>
        </Link>
        <div className="flex justify-center">
          <ProductCartAction product={product}/>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
