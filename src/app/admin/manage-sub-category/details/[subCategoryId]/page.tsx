"use client";
import GAActionBar from "@/components/ui/GAActionBar";
import GABreadCrumb from "@/components/ui/GABreadcrumb";
import { useGetSingleSubCategoryQuery } from "@/redux/features/subCategory/subCategoryApi";
import { Card, List, Typography } from "antd";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const SugCategoryDetails = () => {
  const params = useParams();
  const { data: session } = useSession();
  const { isLoading, data } = useGetSingleSubCategoryQuery(
    {
      id: params.subCategoryId as string,
      params: {
        populate: "category,products",
      },
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !params.subCategoryId || !session?.accessToken,
    }
  );

  const subCategory = data?.subCategory;

  return (
    <div>
      <GAActionBar title="Sub-Category Details">
        <GABreadCrumb items={[{ label: "Management" }, { label: "Manage Sub-Category" }, { label: "Details" }]} />
      </GAActionBar>
      <Card bordered loading={isLoading}>
        <List>
          <List.Item>
            <Typography.Text strong>Title: </Typography.Text>
            <Typography.Text className="w-3/5">{subCategory?.title}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Category: </Typography.Text>
            <Typography.Text className="w-3/5">{subCategory?.category?.title}</Typography.Text>
          </List.Item>
          <List.Item>
            <Typography.Text strong>Total Product:</Typography.Text>
            <Typography.Text className="w-3/5">{subCategory?._count?.products}</Typography.Text>
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default SugCategoryDetails;
