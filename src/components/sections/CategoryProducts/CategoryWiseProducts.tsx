import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const CategoryWiseProducts = () => {
  return (
    <div>
      <div className="ga-container">
        <div className="pb-5">
          <div className="grid grid-cols-4 gap-5">
            <Card>
              <Link href="/product/ga">
                <div className="flex flex-col gap-1">
                  <Image alt="product-img" width={250} height={250} src="/img/product-dummy.png" className="w-full h-[200px]" />
                  <h1 className="text-sm underline text-center text-secondary">BD BEST EVER FOOD</h1>
                  <p className="text-sm text-secondary text-center">1 x 6kg</p>
                  <div className="flex">
                    <Button
                      type="default"
                      icon={<RiSubtractFill />}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 0,
                        backgroundColor: "red",
                      }}
                    />
                    <Button
                      type="primary"
                      icon={<RiAddFill />}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 0,
                      }}
                    />
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
