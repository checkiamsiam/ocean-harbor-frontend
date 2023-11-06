import { Breadcrumb } from "antd";
import Link from "next/link";

const GABreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    ...items.map((item) => {
      return {
        title: item.link ? <Link href={item.link}>{item.label}</Link> : <span>{item.label}</span>,
      };
    }),
  ];

  return <Breadcrumb separator=">" rootClassName="test" items={breadCrumbItems}></Breadcrumb>;
};

export default GABreadCrumb;
