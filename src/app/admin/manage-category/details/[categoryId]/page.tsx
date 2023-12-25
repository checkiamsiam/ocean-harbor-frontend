"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleCategoryQuery } from "@/redux/features/category/categoryApi";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";

const CategoryDetailsPage = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleCategoryQuery(
    {
      id: params.categoryId as string,
      params: {
        populate: "brands,subCategories,products",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.categoryId || !session?.accessToken,
    }
  );

  const category = data?.category;


  return (
    <div>
      <GAActionBar title="Category Details">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Category" }, { label: "Details" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
        <Image src={category?.icon as string} width={200} height={200} alt="category-icon" />
          <List.Item>
            <Typography.Text strong>Title: </Typography.Text>
            <Typography.Text className="w-3/5">{category?.title}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Sub Categories: </Typography.Text>
            <Typography.Text className="w-3/5">{category?.subCategories?.map((sub) => sub.title).join(", ") || 0}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Brands:</Typography.Text>
            <Typography.Text className="w-3/5">{category?.brands?.map((b) => b?.brand?.title).join(", ") || 0}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Total Product:</Typography.Text>
            <Typography.Text className="w-3/5">{category?._count?.products}</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default CategoryDetailsPage;
