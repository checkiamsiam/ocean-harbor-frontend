import BrandResult from "@/components/sectionComponents/SearchResultTab/BrandResult";
import CategoryResult from "@/components/sectionComponents/SearchResultTab/CategoryResult";
import ProductResult from "@/components/sectionComponents/SearchResultTab/ProductResult";
import { getSearch } from "@/redux/features/search/searchApi";
import { IQuery } from "@/types";
import { Tabs } from "antd";

const SearchResultTab = async ({ searchKey, searchParams }: { searchKey: string; searchParams: IQuery }) => {
  const data = await getSearch({
    params: {
      searchKey,
      limit: searchParams.limit || 12,
      page: searchParams.page || 1,
    },
  });

  return (
    <div>
      <div className="ga-container">
        <Tabs
          type="card"
          items={[
            {
              key: "1",
              label: "Products",
              children: <ProductResult products={data?.products} meta={data?.meta} />,
            },
            {
              key: "2",
              label: "Categories",
              children: <CategoryResult categories={data?.categories}/>,
            },
            {
              key: "3",
              label: "Brands",
              children: <BrandResult brands={data?.brands} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchResultTab;
