"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { Col, Row, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleProductQuery(
    {
      id: params.productId as string,
      params: {
        populate: "category,subCategory,brand",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.productId || !session?.accessToken,
    }
  );

  const product = data?.product;

  return (
    <div>
      <GAActionBar title="Product Details">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Product" }, { label: "Details" }]} />
      </GAActionBar>
      {isLoading || !product ? (
        <Skeleton active />
      ) : (
        <div>
          <Row gutter={[20, 20]}>
            <Col span={24} md={10}>
              <Image src={product?.image} alt="" width={600} height={600} className="shadow-md w-full h-full" layout="responsive" />
            </Col>
            <Col span={24} md={14}>
              <div className="md:p-5">
                <div>
                  <div>
                    <h1 className="text-primary mb-5">{product?.title}</h1>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Product Id:</p>
                        <p className="text-secondary">{product?.id}</p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Packaging:</p>
                        <p className="text-secondary">
                          {product?.packetPerBox} x {product?.netWeight}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Type:</p>
                        <p className="text-secondary">{product?.type}</p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Category:</p>
                        <p className="text-secondary">
                          <p className="hover:text-primary text-secondary ">{product?.category?.title}</p>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Sub Category</p>
                        <p className="hover:text-primary text-secondary ">{product?.subCategory?.title}</p>
                      </div>
                      <div className="grid grid-cols-2 text-md">
                        <p className="text-secondary font-semibold">Brand</p>
                        <p className="hover:text-primary text-secondary ">{product?.brand?.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
