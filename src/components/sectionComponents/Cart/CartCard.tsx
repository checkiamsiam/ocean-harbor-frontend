import ProductCartAction from "@/components/common/ProductCartAction";
import { Link } from "@/lib/router-events";
import { Product } from "@/types/ApiResponse";
import { Card } from "antd";
import Image from "next/image";

const CartCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <div className="flex gap-5">
          <Link href={`/product/${product?.id}`}>
            <Image src={product?.image} alt="" width={50} height={50} />
          </Link>
          <div className="flex flex-col gap-1">
            <Link href="/product/ga">
              <h1 className="text-sm underline  text-secondary">{product?.title}</h1>
            </Link>
            <Link href="/product/ga">
              <p className="text-sm text-secondary ">
                {product?.packetPerBox} x {product?.netWeight}
              </p>{" "}
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          <ProductCartAction product={product} />
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
