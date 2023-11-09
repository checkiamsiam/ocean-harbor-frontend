import ProductCartAction from "@/components/common/ProductCartAction";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const CartCard = () => {
  return (
    <Card>
      <div className="flex flex-wrap gap-5 justify-between items-center">
        <div className="flex gap-5">
          <Link href="/product/ga">
            <Image src="/img/product-dummy.png" alt="" width={50} height={50} />{" "}
          </Link>
          <div className="flex flex-col gap-1">
            <Link href="/product/ga">
              <h1 className="text-sm underline  text-secondary">BD BEST EVER FOOD</h1>
            </Link>
            <Link href="/product/ga">
              <p className="text-sm text-secondary ">1 x 6kg</p>{" "}
            </Link>
          </div>
        </div>
        <div className="flex gap-5">
          <ProductCartAction />
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
