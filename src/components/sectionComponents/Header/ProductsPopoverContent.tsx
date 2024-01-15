"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { Link } from "@/lib/router-events";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import { Col, Row } from "antd";
import { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const ProductsPopoverContent = () => {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery({});
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useClickOutside(ref, () => setShow(false));
  return (
    <>
      <div className="relative">
        <p onClick={() => setShow(!show)} className="capitalize cursor-pointer hover:text-primary flex items-center gap-1">
          Products <AiFillCaretDown />
        </p>
        {show && !isLoading && isSuccess && (
          <div ref={ref} className="absolute z-50 p-5 bg-secondary mt-4 w-[800px] shadow-lg">
            <Row gutter={[10, 10]}>
              {data?.categories?.map((slug, i) => (
                <Col span={8} key={i}>
                  <Link href={`/categories/${slug.id}`} className="text-white  hover:text-primary">
                    {slug.title}
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPopoverContent;
