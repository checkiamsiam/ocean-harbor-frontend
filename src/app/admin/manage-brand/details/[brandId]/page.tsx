"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleBrandQuery } from "@/redux/features/brand/brandApi";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";

const CategoryDetailsPage = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleBrandQuery(
    {
      id: params.brandId as string,
      params: {
        populate: "categories,products",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.brandId || !session?.accessToken,
    }
  );

  const brand = data?.brand;

  return (
    <div>
      <GAActionBar title="Brand Details">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Brand" }, { label: "Details" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <Image src={brand?.logo as string} width={200} height={200} alt="brand-icon" />
          <List.Item>
            <Typography.Text strong>Title: </Typography.Text>
            <Typography.Text className="w-3/5">{brand?.title}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Categories:</Typography.Text>
            <Typography.Text className="w-3/5">{brand?.categories?.map((c) => c?.category?.title).join(", ") || 0}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Total Product:</Typography.Text>
            <Typography.Text className="w-3/5">{brand?._count?.products}</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default CategoryDetailsPage;
