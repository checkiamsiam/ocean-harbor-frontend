"use client";
import BrandResult from "@/components/sectionComponents/SearchResultTab/BrandResult";
import CategoryResult from "@/components/sectionComponents/SearchResultTab/CategoryResult";
import ProductResult from "@/components/sectionComponents/SearchResultTab/ProductResult";
import { Tabs } from "antd";

const SearchResultTab = () => {
  return (
    <div>
      <div className="ga-container">
        <Tabs
          type="card"
          items={[
            {
              key: "1",
              label: "Products",
              children: <ProductResult />,
            },
            {
              key: "2",
              label: "Categories",
              children: <CategoryResult />,
            },
            {
              key: "3",
              label: "Brands",
              children: <BrandResult />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchResultTab;
